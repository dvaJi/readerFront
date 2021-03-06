import { Page, PageFile } from "../types/page";
import { Release } from "../types/release";

export function getReleases(amount = 4) {
  const releases: Release[] = [];
  for (let index = 1; index < amount + 1; index++) {
    const is = Math.floor(Math.random() * 2) + 1 === 1;
    let work = {
      id: 123123 + index,
      name: "BOB" + index,
      stub: "bob" + index,
      uniqid: "wqioweas" + index,
      language_name: "en",
      adult: is,
      licensed: false,
      hidden: false,
    };
    let chapter: Release = {
      id: index,
      language: 1,
      language_name: "es",
      volume: is ? 1 : 0,
      uniqid: is ? "asd" + index : "qwery" + index,
      chapter: index * 2,
      description: "",
      name: is ? "Test " + index : "",
      stub: "test-" + index,
      thumbnail: "thumb " + index + ".png",
      thumbnail_path: "/test/thumb " + index + ".png",
      download_href: "https://localhost:3000/download/" + index,
      subchapter: is ? 0 : 1,
      releaseDate: "2019-05-15T02:44:47.000Z",
      read_path: "/read/asd/" + index * 2,
      createdAt: "2019-05-15T02:44:47.000Z",
      updatedAt: "2019-05-15T02:44:47.000Z",
      work: work,
    };
    releases.push(chapter);
  }
  return releases;
}

export function getRelease() {
  let work = {
    name: "Test1",
    stub: "",
    uniqid: "wqioweas",
    licensed: false,
    hidden: false,
  };
  return {
    id: 1,
    uniqid: "test-1",
    language: 1,
    language_name: "es",
    volume: 0,
    description: "",
    chapter: 0,
    name: "Test 1",
    stub: "test-1",
    thumbnail: "thumb.png",
    thumbnail_path: "/test/thumb.png",
    read_path: '/read/infection/en/0/27.0',
    subchapter: 1,
    work: work,
  };
}

export function getPages(amount = 2): Page[] {
  const pages: Page[] = [];
  for (let index = 1; index < amount; index++) {
    pages.push({
      id: index,
      filename: "page_0" + index + ".jpg",
      height: 100,
      width: 80,
      size: 8090,
    });
  }
  return pages;
}

export function getPagesAsFiles(amount = 2) {
  const pages: PageFile[] = [];
  for (let index = 1; index < amount; index++) {
    pages.push({
      id: index,
      filename: "page_0" + index + ".jpg",
      uploaded: false,
      height: 100,
      width: 80,
      size: 8090,
      file: {
        preview: "page_0" + index + ".jpg",
        size: 8090,
        type: "jpg",
      },
      isUploading: false,
      hasError: false,
    });
  }
  return pages;
}

export function getPagesUploaded(amount = 2): Page[] {
  const pages: (Page & { uploaded: boolean })[] = [];
  for (let index = 1; index < amount; index++) {
    pages.push({
      id: index,
      filename: "page_0" + index + ".jpg",
      uploaded: true,
      height: 100,
      width: 80,
      size: 8090,
    });
  }
  return pages;
}
