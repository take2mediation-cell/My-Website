import { Route, Switch } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import TaxAdvisor from "@/pages/TaxAdvisor";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <div className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/financial-advisor" component={TaxAdvisor} />
          <Route>
            <main className="mx-auto max-w-3xl px-4 py-16 text-center">
              <h1 className="text-2xl font-semibold">Page not found</h1>
            </main>
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
