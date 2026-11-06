import { menuItems } from "./data/menuData.js";
export default function App() {
return (
<div className="app">
<h1>MenuHub</h1>
<p>{menuItems.length} dishes loaded.</p>
</div>
);
}
