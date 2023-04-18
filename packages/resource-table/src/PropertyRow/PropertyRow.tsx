import React, { ReactNode } from "react";
import "./propertyRow.scss";

interface Props {
  name: string;
  value: ReactNode;
  actions?: ReactNode;
  className?: string;
}

const PropertyRow: React.FC<Props> = ({ name, value, actions, className }) => {
  return (
    <div className={`property-row ${className}`}>
      <span className="property-name">
        {name}:
      </span>
      <span className="property-value">
        {value ?? "(empty)"}
      </span>
      {actions ? <div className="property-actions">{actions}</div> : null}
    </div>
  );
};

export default PropertyRow;
