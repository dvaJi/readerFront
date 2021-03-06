import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { useQuery, useMutation } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// App imports
import PostForm from './Form';
import { Card, buttonWithColors, Container } from '@readerfront/ui';
import { MetaTagEdit } from '../ABlogMetatag';
import { FIND_BY_STUB, FETCH_ALL_POSTS_WITH_AGG } from '../queries';
import { UPDATE_POST } from '../mutations';

const ButtonLink = buttonWithColors(Link);

function EditPost() {
  const { formatMessage: f } = useIntl();

  return (
    <Container>
      <MetaTagEdit />
      <div style={{ marginTop: '1rem' }}>
        <ButtonLink to={'/blog/manage'}>
          <FontAwesomeIcon icon="arrow-left" />{' '}
          {f({ id: 'go_back', defaultMessage: 'Go back' })}
        </ButtonLink>
      </div>
      <Card>
        <h4>
          {f({ id: 'edit', defaultMessage: 'Edit' })}{' '}
          {f({ id: 'post', defaultMessage: 'Post' })}
        </h4>
        <PostTable />
      </Card>
    </Container>
  );
}

function PostTable() {
  const history = useHistory();
  const { stub } = useParams();
  const { formatMessage: f } = useIntl();
  const { loading, error, data } = useQuery(FIND_BY_STUB, {
    variables: { stub }
  });
  const [updatePost] = useMutation(UPDATE_POST);

  if (loading)
    return <div>{f({ id: 'loading', defaultMessage: 'Loading...' })}</div>;
  if (error) return <p id="error_edit_post">Error :(</p>;

  return (
    <div>
      <MetaTagEdit postTitle={data.postByStub.title} />
      <PostForm
        post={data.postByStub}
        onSubmit={async (event, post) => {
          event.preventDefault();

          try {
            await updatePost({
              variables: post,
              refetchQueries: [
                {
                  query: FETCH_ALL_POSTS_WITH_AGG,
                  variables: { first: 20, offset: 0 }
                }
              ]
            });

            history.push('/blog/manage');
          } catch (err) {
            alert(err);
          }
        }}
      />
    </div>
  );
}

export default EditPost;
