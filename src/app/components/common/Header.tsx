import Link from 'next/link';

export function Header() {
  return (
    <section className="fixed top-0 left-0 z-30 flex w-full flex-col border-b transition-all duration-300 border-foreground/10 bg-background/30 backdrop-blur">
      <div className="site-container flex w-full items-center">
        <header className="relative flex w-full items-center gap-2 h-[56px]">
          <div className="flex h-full flex-auto justify-end">
            <nav>
              <ul className="flex h-full items-center">
                <li className="w-full">
                  <Link
                    href="/#sign-up"
                    className="hidden whitespace-nowrap md:flex button group button--primary"
                  >
                    Sign Up for Free
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </section>
  );
}
