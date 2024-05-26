import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkWrapper from "./LinkWrapper";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Seperator from "./Seperator";
import { Fragment } from "react/jsx-runtime";

interface IProprs {
  item: any;
}

export default function SideBarLink({ item }: IProprs) {
  return (
    <>
      {item.hasChild ? (
        <>
          <Accordion key={String(item.title)}>
            <AccordionItem
              title={
                <>
                  <FontAwesomeIcon icon={item.icon} /> {String(item.title)}
                </>
              }
            >
              {item.children?.map((child: any, inx: number) => {
                return (
                  <Fragment key={child.title}>
                    <LinkWrapper link={String(child.link)}>
                      <FontAwesomeIcon icon={child.icon as IconProp} />
                      <span className="mx-2">{String(child.title)}</span>
                    </LinkWrapper>
                    {inx + 1 !== item.children.length ? <Seperator /> : null}
                  </Fragment>
                );
              })}
            </AccordionItem>
          </Accordion>
        </>
      ) : (
        <LinkWrapper link={String(item.link)}>
          <FontAwesomeIcon icon={item.icon as IconProp} />
          <span className="mx-2">{String(item.title)}</span>
        </LinkWrapper>
      )}
    </>
  );
}
