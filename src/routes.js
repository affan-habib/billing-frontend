import Billing from "./pages/billing/Billing";
import Sales from "./pages/sales/Sales";

const routes = () => [
  {
    route: "/billing",
    title: "Billing",
    element: <Billing />,
  },
  {
    route: "/sales",
    title: "SALES",
    element: <Sales />,
  },
];

export default routes;
