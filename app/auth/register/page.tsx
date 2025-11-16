import RegisterForm from "@/app/components/RegisterForm";
import { Suspense } from "react";

function Register() {
     return (
        <Suspense>
          <RegisterForm />
        </Suspense>
      );
}

export default Register;