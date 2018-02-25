import React, { Component } from "react";
import styled from "styled-components";

export default class ImagesList extends Component {
  render() {
    let isLoading = this.props.loading;
    let pages = this.props.pages;
    let rows = [];
    const ImageList = styled.div`
      text-align: center;
    `;

    window.scrollTo(0, 0);

    if (isLoading) {
      return <div className="shimme-img" />;
    }

    pages.forEach(page => {
      rows.push(<img key={page.id} alt={page.filename} src={page.thumb_url} />);
    });

    return <ImageList>{rows}</ImageList>;
  }
}
