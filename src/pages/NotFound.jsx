import PageLayout from "../components/templates/PageLayout";
import Button from "../components/atoms/Button";

function NotFound({
  title = "This page has left the table",
  message = "The link may be out of date, or the restaurant is no longer listed with us.",
}) {
  return (
    <PageLayout className="shell grid min-h-[70vh] place-items-center py-32 text-center">
      <div className="max-w-md">
        <p className="font-display text-[clamp(4rem,12vw,7rem)] font-semibold leading-none text-ember-600">
          404
        </p>
        <h1 className="mt-4 text-balance font-display text-3xl font-semibold">{title}</h1>
        <p className="mt-3 text-[17px] leading-relaxed text-ink-600">{message}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button to="/">Back to home</Button>
          <Button variant="secondary" to="/book">
            Book a table
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}

export default NotFound;
