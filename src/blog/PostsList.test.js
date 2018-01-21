import React from "react";
import { render, mount } from "enzyme";
import PostsList from "./PostsList";
import PostCard from "./PostCard";
import PostCardEmpty from "./PostCardEmpty";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  render(<PostsList loading={true} />);
});

it("should render posts without crashing", () => {
  const posts = generatePosts();
  mount(
    <BrowserRouter>
      <PostsList loading={false} posts={posts} />
    </BrowserRouter>
  );
});

it("renders PostCard without crashing", () => {
  const posts = generatePosts();
  const listPostCard = generatePostCard(posts);
  const wrapper = mount(
    <BrowserRouter>
      <PostsList loading={false} posts={posts} />
    </BrowserRouter>
  );
  expect(
    wrapper.children().containsMatchingElement(listPostCard)
  ).toBeTruthy();
});

it("renders PostCard and fetching data without crashing", () => {
  const posts = generatePosts();
  const listPostCard = generatePostCard(posts);
  const wrapper = mount(
    <BrowserRouter>
      <PostsList loading={false} posts={posts} isFetchingData={true} />
    </BrowserRouter>
  );
  expect(
    wrapper.children().containsMatchingElement(listPostCard)
  ).toBeTruthy();
});

it("renders PostCardEmpty without crashing", () => {
  const wrapper = mount(
    <BrowserRouter>
      <PostsList loading={true} />
    </BrowserRouter>
  );
  expect(wrapper.find(PostCardEmpty)).toBeTruthy();
});

/**
 * Genera mock de publicaciones
 *
 * @returns lista de publicaciones
 */
function generatePosts() {
  let posts = [];
  for (let index = 0; index < 10; index++) {
    posts.push({ id: index, date: "2017-01-01", slug: "aa_a", title: {rendered: "aaa"} });
  }
  return posts;
}

/**
 * Genera mock de ReleaseCard
 *
 * @param {any} releases
 * @returns lista de ReleaseCard
 */
function generatePostCard(releases) {
  let listPostCard = [];
  releases.map(release => {
    listPostCard.push(
      <PostCard key={release.id} post={release} postUrl={""} />
    );
  });

  return listPostCard;
}
