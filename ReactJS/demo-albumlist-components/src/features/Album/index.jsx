import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList'

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
      {
        id: 1,
        name: "Nhạc Hoa thịnh hành",
        thumbnailUrl:
          "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/3/6/a/036a91112f3143c27f0ee1a63dff5dab.jpg",
      },
      {
        id: 2,
        name: "Nhạc chill thư giãn",
        thumbnailUrl:
          "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/2/e/3/92e34e8a92ba589ba41c078bfbbf57f0.jpg",
      },
      {
        id: 3,
        name: "Acoustic thư giãn",
        thumbnailUrl:
          "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/7/3/c/173ce5cfc42b83b9ebe59d4441fbae60.jpg",
      },
    ];

    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;