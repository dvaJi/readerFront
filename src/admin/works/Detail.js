import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { Query, graphql } from 'react-apollo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// App Imports
import { Container, Button, ButtonLink, ButtonGroup, Table } from 'common/ui';
import WorkInfo from './WorkInfo';
import { FETCH_CHAPTERS } from './query';
import { REMOVE_CHAPTER } from './mutation';
import { languageIdToName } from 'utils/common';

function Detail({ match, removeChapter }) {
  const { formatMessage: f } = useIntl();
  const remove = async id => {
    if (id > 0) {
      let check = window.confirm(
        f({
          id: 'confirm_delete_chapter',
          defaultMessage: 'confirm_delete_chapter'
        })
      );

      if (check) {
        await removeChapter({
          variables: { id: id },
          refetchQueries: [
            {
              query: FETCH_CHAPTERS,
              variables: {
                language: -1,
                workStub: match.params.stub
              }
            }
          ]
        });
      }
    }
  };

  return (
    <Container>
      <>
        <div className="m-1">
          <ButtonLink to={'/admincp/work/manage'}>
            <FontAwesomeIcon icon={faArrowLeft} className="mr-1" />
            {f({ id: 'go_back', defaultMessage: 'Go back' })}
          </ButtonLink>
        </div>
        <WorkInfo stub={match.params.stub} />
        <div className="m-1 mb-2">
          <ButtonLink
            color="primary"
            className="ml-1"
            to={
              '/admincp/work/' +
              match.params.workId +
              '/' +
              match.params.stub +
              '/chapter/add'
            }
          >
            <FontAwesomeIcon icon={faPlus} className="mr-1" />
            {f({ id: 'create_chapter', defaultMessage: 'Create chapter' })}
          </ButtonLink>
        </div>

        <Table>
          <thead>
            <tr>
              <th>{f({ id: 'volume', defaultMessage: 'Volume' })}</th>
              <th>{f({ id: 'chapter', defaultMessage: 'Chapter' })}</th>
              <th>{f({ id: 'name', defaultMessage: 'Name' })}</th>
              <th>{f({ id: 'language', defaultMessage: 'Language' })}</th>
              <th>{f({ id: 'created_at', defaultMessage: 'Created at' })}</th>
              <th style={{ textAlign: 'center' }}>
                {f({ id: 'actions', defaultMessage: 'Actions' })}
              </th>
            </tr>
          </thead>

          <tbody>
            <Query
              query={FETCH_CHAPTERS}
              variables={{
                language: -1,
                workStub: match.params.stub
              }}
            >
              {({ loading, error, data }) => {
                if (loading)
                  return (
                    <tr>
                      <td colSpan="7">
                        {f({ id: 'loading', defaultMessage: 'Loading...' })}
                      </td>
                    </tr>
                  );
                if (error) return <p id="error_releases">Error :(</p>;
                const chapterBaseUrl =
                  '/admincp/work/' +
                  match.params.workId +
                  '/' +
                  match.params.stub +
                  '/chapter/';
                return data.chaptersByWork.length > 0 ? (
                  data.chaptersByWork
                    .sort((ch1, ch2) => ch2.chapter - ch1.chapter)
                    .map(
                      ({
                        id,
                        name,
                        chapter,
                        subchapter,
                        volume,
                        language,
                        createdAt
                      }) => (
                        <tr key={id}>
                          <td>{volume}</td>
                          <td>
                            <Link to={chapterBaseUrl + id}>
                              {chapter}.{subchapter}
                            </Link>
                          </td>

                          <td>
                            <Link to={chapterBaseUrl + id}>{name}</Link>
                          </td>

                          <td style={{ textAlign: 'center' }}>
                            {languageIdToName(language)}
                          </td>

                          <td>{new Date(createdAt).toDateString()}</td>

                          <td style={{ textAlign: 'center' }}>
                            <ButtonGroup>
                              <ButtonLink
                                id={'edit-' + id}
                                size="sm"
                                to={
                                  '/admincp/work/' +
                                  match.params.workId +
                                  '/' +
                                  match.params.stub +
                                  '/chapter/edit/' +
                                  id
                                }
                              >
                                {f({ id: 'edit', defaultMessage: 'Edit' })}
                              </ButtonLink>
                              <Button
                                id={'remove-' + id}
                                size="sm"
                                onClick={() => remove(id)}
                              >
                                {f({ id: 'delete', defaultMessage: 'Delete' })}
                              </Button>
                            </ButtonGroup>
                          </td>
                        </tr>
                      )
                    )
                ) : (
                  <tr>
                    <td colSpan="6">
                      {f({
                        id: 'chapters_empty',
                        defaultMessage: 'Chapters empty'
                      })}
                    </td>
                  </tr>
                );
              }}
            </Query>
          </tbody>
        </Table>
      </>
    </Container>
  );
}

export default graphql(REMOVE_CHAPTER, { name: 'removeChapter' })(memo(Detail));
