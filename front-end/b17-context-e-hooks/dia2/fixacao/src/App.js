import React from "react";
import Form from "./components/Form";
import InfoCard from "./components/InfoCard";

import FormProvider from "./context/FormProvider";

function App() {
  return (
    <FormProvider>
      <Form />
      <InfoCard />
    </FormProvider>
  );
}

export default App;
