import PageShell from "@/components/page-shell";

const overview = {
  description:
    "Writing comprehensive tests is time-consuming, but skipping them leads to production bugs and regression issues. Claude Code accelerates test creation by analyzing your code, identifying edge cases, and generating test suites with proper assertions and mocking. Instead of spending hours writing boilerplate test code, you can focus on reviewing test logic and ensuring critical paths are covered.",
  when: "Use this workflow when adding tests to existing code, increasing coverage for critical paths, validating edge cases and failure modes, implementing TDD for new features, or preparing code for refactoring.",
} as const;

const steps = [
  {
    step: "Describe the function or module under test",
    description:
      "Provide context about what the code does, its inputs and outputs, and any dependencies or side effects. Include information about the testing framework you're using.",
    example:
      '"Generate tests for the calculateDiscount function in src/pricing/discount.ts. It takes a cart total and coupon code, applies business rules, and returns the final price. We use Jest with TypeScript."',
  },
  {
    step: "Ask for edge cases and failure modes",
    description:
      "Request that Claude identify boundary conditions, error scenarios, and unexpected inputs that your tests should handle.",
    example:
      '"What edge cases should we test? Consider: empty carts, expired coupons, negative amounts, extremely large numbers, null/undefined inputs, and concurrent discount applications."',
  },
  {
    step: "Generate tests with clear assertions",
    description:
      "Have Claude create test cases with descriptive names, proper setup/teardown, meaningful assertions, and appropriate mocking.",
    example:
      '"Create a test suite with: happy path tests, error handling tests, boundary condition tests, and integration tests for the discount API endpoint. Use clear test names like \'should apply percentage discount when coupon is valid\'."',
  },
  {
    step: "Run the suite and review failures",
    description:
      "Execute the generated tests, analyze any failures, and iterate on test implementation or the underlying code as needed.",
    example:
      '"Run npm test discount.test.ts. For any failures, explain what\'s wrong and whether it\'s a test issue or a bug in the implementation."',
  },
] as const;

const examplePrompts = [
  {
    scenario: "Adding tests to untested legacy code",
    prompt:
      "This auth.service.ts file has no tests. Analyze it and create a comprehensive test suite covering user registration, login, token refresh, and error handling. Mock the database calls.",
  },
  {
    scenario: "Testing React components",
    prompt:
      "Generate tests for the UserProfile component using React Testing Library. Test rendering with different prop combinations, user interactions (button clicks, form submissions), loading states, and error states.",
  },
  {
    scenario: "API endpoint testing",
    prompt:
      "Create integration tests for the POST /api/orders endpoint. Test successful order creation, validation errors, authentication failures, and rate limiting. Use supertest and mock the payment gateway.",
  },
  {
    scenario: "Increasing coverage for critical paths",
    prompt:
      "Our payment processing module has 40% test coverage. Identify the most critical untested code paths and generate tests for them, prioritizing transaction handling and refund logic.",
  },
] as const;

const outputs = [
  {
    output: "Test plan",
    description:
      "Structured outline of test categories, edge cases to cover, and testing strategy tailored to your codebase",
  },
  {
    output: "New tests",
    description:
      "Complete test files with proper imports, setup/teardown, mocking, descriptive test names, and meaningful assertions",
  },
  {
    output: "Coverage notes",
    description:
      "Analysis of what's tested, what's missing, and recommendations for achieving comprehensive coverage",
  },
  {
    output: "Mock implementations",
    description:
      "Reusable mock objects, stubs, and fixtures for external dependencies like databases, APIs, and third-party services",
  },
] as const;

const bestPractices = [
  "Start with the test plan before writing tests—understand what needs coverage before generating code",
  "Focus on behavior and outcomes, not implementation details—tests should survive refactoring",
  "Use descriptive test names that explain what's being tested and what the expected outcome is",
  "Mock external dependencies to make tests fast, reliable, and deterministic",
  "Review generated tests critically—Claude writes good tests, but you know your domain best",
] as const;

const commonPitfalls = [
  {
    pitfall: "Generating tests without understanding test quality",
    solution:
      "Ask Claude to explain why each test is important and what specific behavior it validates. Don't just blindly accept generated tests.",
  },
  {
    pitfall: "Over-mocking and testing implementation instead of behavior",
    solution:
      "Request integration tests alongside unit tests. Ask Claude: 'Are we testing behavior or implementation here?'",
  },
  {
    pitfall: "Not running tests after generation",
    solution:
      "Always run the test suite immediately after generation. Fix any failures before moving on to ensure tests are actually valid.",
  },
] as const;

const tips = [
  {
    tip: "Generate tests alongside new features",
    example:
      '"I\'m building a new comment system. Write the tests first based on these requirements, then we\'ll implement the code to pass them."',
  },
  {
    tip: "Use coverage reports to guide test generation",
    example:
      '"Here\'s our coverage report showing 60% coverage. Analyze the uncovered lines and generate tests to get us to 85%."',
  },
  {
    tip: "Create reusable test utilities",
    example:
      '"Extract the common setup code from these tests into a test factory. I want to reuse user creation and authentication mocks across test files."',
  },
] as const;

const related = [
  { title: "Refactoring", path: "/workflows/claude-code/refactoring" },
  { title: "Bug Fixing", path: "/workflows/claude-code/bug-fixing" },
  { title: "CI/CD Automation", path: "/workflows/claude-code/ci-cd-automation" },
] as const;

export default function TestGenerationWorkflowPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Workflows", href: "/workflows" },
        { label: "Claude Code", href: "/use-cases/claude-code" },
        { label: "Test Generation" },
      ]}
      eyebrow="Workflow"
      title="Test Generation"
      description="Add coverage for edge cases and critical paths quickly."
    >
      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Overview</h2>
        <p className="text-sm text-muted-foreground">{overview.description}</p>
        <div className="rounded-xl bg-background/50 p-4">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70 mb-2">
            When to use
          </div>
          <p className="text-sm text-muted-foreground">{overview.when}</p>
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Step-by-step process</h2>
        <div className="grid gap-6">
          {steps.map((item, index) => (
            <div key={item.step} className="glass-card rounded-2xl border border-border/70 p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background text-xs font-medium">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-lg">{item.step}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  <div className="mt-3 rounded-lg bg-background/50 p-3 text-sm italic text-muted-foreground">
                    {item.example}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Example prompts</h2>
        <div className="grid gap-4">
          {examplePrompts.map((item) => (
            <div
              key={item.scenario}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <div className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                {item.scenario}
              </div>
              <p className="text-sm italic text-muted-foreground">"{item.prompt}"</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Expected outputs</h2>
        <div className="grid gap-4">
          {outputs.map((item) => (
            <div
              key={item.output}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{item.output}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Best practices</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {bestPractices.map((practice) => (
            <div
              key={practice}
              className="glass-card rounded-xl border border-border/70 px-4 py-3"
            >
              {practice}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Common pitfalls</h2>
        <div className="grid gap-4">
          {commonPitfalls.map((item) => (
            <div
              key={item.pitfall}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg text-orange-600/90">{item.pitfall}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="font-medium">Solution: </span>
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[32px] border border-border/70 bg-card/70 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Pro tips</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {tips.map((item) => (
            <div
              key={item.tip}
              className="glass-card rounded-2xl border border-border/70 p-5"
            >
              <h3 className="font-serif text-lg">{item.tip}</h3>
              <p className="mt-2 text-sm italic text-muted-foreground">"{item.example}"</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 rounded-[32px] border border-border/70 bg-background/80 p-8 md:p-12">
        <h2 className="font-serif text-2xl">Related workflows</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {related.map((item) => (
            <a
              key={item.title}
              href={item.path}
              className="glass-card rounded-xl border border-border/70 px-4 py-3 text-sm transition hover:border-foreground/40"
            >
              {item.title}
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
