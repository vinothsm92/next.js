'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { route } from '../../../route';

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setAnchorEl(event.currentTarget);
    setOpenIndex(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenIndex(null);
  };

  return (
    <div>
        {route.map(({ path, name, children = [] }, index) => (
          <React.Fragment key={path}>
            <Button
            
              id={`demo-positioned-button-${index}`}
              aria-controls={openIndex === index ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openIndex === index ? 'true' : undefined}
              onClick={(e) => handleClick(e, index)}
            >
              
                <Link href={children.length === 0 ? path : '#'}>{name}</Link>
              
            </Button>
            {children.length > 0 && openIndex === index ? (
              <Menu
                sx={{ mt: '45px' }}
                aria-labelledby={`demo-positioned-button-${index}`}
                anchorEl={anchorEl}
                open={openIndex === index}
                onClose={handleClose}
                id="demo-positioned-menu"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                {children.map(({ path: childPath, name: childName }) => (
                  <MenuItem key={childPath} onClick={handleClose}>
                    <Link href={childPath}>{childName}</Link>
                  </MenuItem>
                ))}
              </Menu>
            ) : null}
          </React.Fragment>
        ))}
    </div>
  );
}
