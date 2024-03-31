//Librerias
import { ErrorBoundary } from "react-error-boundary";

//Componentes
import ErrorPage from "../components/Error";

function ErrorFallback({ error }) {
    console.error(`Resultado del Error: ` + error);

    return (
        <ErrorPage
            msg="Ha ocurrido un error desconocido, por favor escala al área de TI para más información."
            title={error?.message || "Error desconocido al renderizar el aplicativo."}
            severity="error"
        />
    );
}

const MiddlewareErrorBoundary = ({ children }) => {
    return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>;
};

export default MiddlewareErrorBoundary;
