import SidebarItem from "./SidebarItem";
import items from "../component/data/sidebar.json";

export default function Sidebar(item) {
  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} {...item} />
      ))}
    </div>
  );
}
