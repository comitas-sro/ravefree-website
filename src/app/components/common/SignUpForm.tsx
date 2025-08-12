export function SignUpForm() {
  return (
    <div className="site-container flex justify-center mt-24 md:mt-36">
      <div
        className="group max-w-xl relative h-full w-full rounded-2xl bg-gradient-to-br from-primary-400 via-base-300/70 to-base-300/70
dark:from-primary-500 dark:via-base-300/50 dark:to-base-300/50
after:absolute after:rounded-[calc(1rem-1px)] after:bg-base-100/30 dark:after:bg-base-800/50 after:inset-[1px]"
      >
        <div className="relative z-10 p-1">
          <div className="bg-base-100 dark:bg-base-800 flex flex-col gap-5 rounded-xl px-4 py-10">
            <h1 className="h2 text-center">SIGN UP FOR FREE ENTRY</h1>
            <iframe
              className="w-full min-h-[280px] mx-auto flex max-w-sm flex-col"
              loading="lazy"
              src="https://tally.so/embed/mV686M?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              frameBorder="0"
              marginWidth={0}
              marginHeight={0}
              title="Registráčny formulár"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
