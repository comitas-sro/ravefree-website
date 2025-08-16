export function SignUpForm() {
  return (
    <div id="sign-up" className="site-container flex justify-center pt-24">
      <div
        className="group max-w-xl relative h-full w-full rounded-2xl bg-gradient-to-br
from-primary-500 via-base-300/50 to-base-300/50
after:absolute after:rounded-[calc(1rem-1px)] after:bg-base-800/50 after:inset-[1px]"
      >
        <div className="relative z-10 p-1">
          <div className="bg-base-800 flex flex-col gap-5 rounded-xl px-4 py-10">
            <h1 className="h2 text-center">Registrácia pre vstup zdarma</h1>
            <iframe
              className="w-full min-h-[700px] mx-auto flex max-w-sm flex-col"
              loading="lazy"
              src="https://tally.so/embed/3qljk9?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
              frameBorder="0"
              marginWidth={0}
              marginHeight={0}
              title="Sign up form"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
