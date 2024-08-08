import { Fragment, useEffect, useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  List,
  ListItem,
  ListItemPrefix,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import {CustomTypography} from "@component/global/Typography";
import {SidebarItemProps} from "@type/index.types";

const SidebarItems = ({ item, Icon, route, child }: SidebarItemProps) => {
  const [show, setShow] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check and update the orientation based on screen width
    const checkOrientation = () => {
      if (window.innerWidth < 760) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Check Orientation on a load
    checkOrientation();
    window.addEventListener('resize', checkOrientation);

    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  const handleOpen = (value: number) => {
    setShow(show === value ? 0 : value);
  };

  return (
    <Fragment>
      {!child ? (
        <Link
          to={route ?? `/admin`}
          className={`${isMobile ? 'w-[6rem]' : ''}`}>
          {/*// @ts-ignore*/}
          <ListItem>
            {/*// @ts-ignore*/}
            <ListItemPrefix>{Icon}</ListItemPrefix>
            <CustomTypography
              className={`text-md font-bold ${isMobile ? 'hidden' : 'flex'}`}
              variant={`span`}
            >
              {item ?? `Dashboard`}
            </CustomTypography>
          </ListItem>
        </Link>
      ) : (
        // @ts-ignore
        <Accordion
          open={show === 1}
          icon={<FiChevronDown />}
          className={`${isMobile ? 'w-[6rem]' : ''}`}>
          {/*// @ts-ignore*/}
          <ListItem
            className="p-0"
            selected={show === 1}>
            {/*// @ts-ignore*/}
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0">
              {/*// @ts-ignore*/}
              <ListItemPrefix>{Icon}</ListItemPrefix>
              <CustomTypography
                className={`text-md font-bold mr-auto ${
                  isMobile ? 'hidden' : 'flex'
                }`}
                variant={`span`}
              >
                item ?? `Dashboard`
              </CustomTypography>
            </AccordionHeader>
          </ListItem>

          <AccordionBody>
            {/*// @ts-ignore*/}
            <List className="p-0">
              {child.length > 0 &&
                child.map((childItem, idx) => {
                  return (
                    <Fragment key={`${childItem}__${idx}`}>
                      <Link to={childItem?.route as string}>
                        {/*// @ts-ignore*/}
                        <ListItem>
                          {/*// @ts-ignore*/}
                          <ListItemPrefix>{childItem?.Icon}</ListItemPrefix>

                          <CustomTypography
                            className={`hover:!no-underline ${
                              isMobile ? 'hidden' : 'flex'
                            }`}
                            variant={`span`}
                            weight="bold"
                            size="lg"
                          >
                            {childItem?.item}
                          </CustomTypography>
                        </ListItem>
                      </Link>
                    </Fragment>
                  );
                })}
            </List>
          </AccordionBody>
        </Accordion>
      )}
    </Fragment>
  );
};

export default SidebarItems;
