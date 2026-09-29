import AttributeCard from "./AttributeCard";

function DashboardGrid({
  attributes = [],
  activeFilter = "All Attributes",
}) {

  const filteredAttributes =
    activeFilter === "All Attributes"
      ? attributes
      : attributes.filter(
          (attribute) =>
            attribute.spectrum === activeFilter
        );

  return (
    <div
      className="
        grid
        gap-5
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-5
      "
    >
      {filteredAttributes.map((attribute) => (
        <AttributeCard
          key={attribute.id}
          attribute={attribute}
        />
      ))}
    </div>
  );

}

export default DashboardGrid;