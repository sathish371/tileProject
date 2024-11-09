import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function DrawerTileCategories() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <Button onClick={openDrawer}>Open Tile Categories</Button>
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Tile Categories
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          Explore our range of wall tiles for different spaces in your home or office.
        </Typography>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="text-3xl mr-3">🛁</div>
            <div>
              <Typography variant="h6">Bathroom Wall Tiles</Typography>
              <Typography color="gray">Stylish tiles for your bathroom.</Typography>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-3xl mr-3">🍽️</div>
            <div>
              <Typography variant="h6">Kitchen Wall Tiles</Typography>
              <Typography color="gray">Durable tiles for the kitchen environment.</Typography>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-3xl mr-3">🛋️</div>
            <div>
              <Typography variant="h6">Living Room Wall Tiles</Typography>
              <Typography color="gray">Perfect tiles to enhance your living space.</Typography>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-3xl mr-3">🏡</div>
            <div>
              <Typography variant="h6">Outdoor Wall Tiles</Typography>
              <Typography color="gray">Durable tiles for outdoor spaces.</Typography>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-3xl mr-3">🛏️</div>
            <div>
              <Typography variant="h6">Bedroom Wall Tiles</Typography>
              <Typography color="gray">Create a cozy atmosphere in your bedroom.</Typography>
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-3xl mr-3">💼</div>
            <div>
              <Typography variant="h6">Office Wall Tiles</Typography>
              <Typography color="gray">Tiles to suit a professional workspace.</Typography>
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-8">
          <Button size="sm" variant="outlined">
            View More
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
