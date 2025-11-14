import { Button } from "@/components/ui/button";

function Newsletter() {
  return (
    <>
      {/* Newsletter Section */}
      <div className="border-b border-border bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-2 text-3xl font-bold">Newsletter</h2>
            <p className="mb-8 text-muted-foreground">
              Invite customers to join your mailing list.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Email address"
                className="w-full sm:max-w-xs p-3 bg-white border border-black"
                required
              />
              <Button type="submit" className=" rounded-none p-6">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
