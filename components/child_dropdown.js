import React from 'react';
import Link from 'next/link';
import './styles/child_dropdown.scss';

const ChildDropdown = (props) => {
  let {expanded} = props;
  return (
    <div className={`${props.className} child-dropdown ${expanded[props.link] ? 'is-expanded' : ''}`}
    >
      <div className="child-dropdown__title">
        <Link href={props.link}>
          <a>{props.label}</a>
        </Link>

        <button onClick={()=> props.toggleExpanded(props.link)}>
          <i className={`fa ${expanded[props.link] ? 'fa-chevron-down' : 'fa-chevron-right'}`}
            aria-label="Expand">
          </i>
        </button>
      </div>

      <ul className="child-dropdown__items">
        {props.items.map((item) => {
          if (item[2].length > 0) return (
            <li key={item[1]}>
              <ChildDropdown
                label={item[0]}
                link={item[1]}
                expanded={expanded}
                items={item[2]}
                toggleExpanded={props.toggleExpanded}
              />
            </li>
          )
          else return (
            <li key={item[1]}>
              <Link href={item[1]}>
                <a>{item[0]}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChildDropdown;
