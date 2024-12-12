import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function MasonryImageList() {
    return (
        <Box sx={{overflowY: 'scroll' }}>
            <ImageList variant="masonry" cols={3} gap={8}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

const itemData = [
    { img: '/girl1.jpg', title: 'Girl 1' },
    { img: '/girl2.jpg', title: 'Girl 2' },
    { img: '/girl5.jpg', title: 'Girl 5' },
    { img: '/girl4.jpg', title: 'Girl 4' },
    { img: '/girl6.jpg', title: 'Girl 6' },
    { img: '/girl7.jpg', title: 'Girl 7' },
    { img: '/girl8.jpg', title: 'Girl 8' },
    { img: '/girl9.jpg', title: 'Girl 9' },
];
