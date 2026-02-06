import PageShell from "@/components/page-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CI/CD Automation | Early Frontier",
  description: "Automate tests, checks, and release steps in your pipeline.",
};

const overview = {
  description:
    "Manual deployments are error-prone and slow. Claude Code helps you build CI/CD pipelines with automated checks, clear gating, and reliable deployment steps. Use it to generate workflow configs and catch issues early.",
  when: "Use this workflow when setting up pipelines, adding quality gates, implementing deployment strategies, troubleshooting failures, or migrating between CI/CD platforms.",
} as const;

const steps = [
  {
    step: "List the CI/CD tasks you want to automate",
    description:
      "Define what should happen on each trigger: code push, pull request, merge to main. Include testing, linting, security scanning, building, and deployment steps.",
    example:
      '"Set up a GitHub Actions workflow that: runs linting and tests on every PR, builds Docker images on merge to main, runs security scans, and deploys to staging automatically."',
  },
  {
    step: "Ask for workflow changes or new actions",
    description:
      "Have Claude generate the pipeline configuration files with proper job dependencies, caching strategies, and environment variable handling.",
    example:
      '"Create a .github/workflows/ci.yml file with separate jobs for lint, test, and build. Use caching for node_modules. Run tests in parallel across Node 18, 20, and 22."',
  },
  {
    step: "Validate in a test branch",
    description:
      "Test the pipeline in a non-production branch first to ensure it works as expected without impacting the main development workflow.",
    example:
      '"Create a test/ci-pipeline branch and push this workflow. Monitor the Actions tab and show me any failures or warnings."',
  },
  {
    step: "Roll out to main with monitoring",
    description:
      "Merge the validated pipeline to main and establish monitoring and alerting for pipeline health and deployment status.",
    example:
      '"Merge the pipeline to main. Set up notifications for pipeline failures. Add a badge to README showing build status."',
  },
] as const;

const examplePrompts = [
  {
    scenario: "Setting up a modern CI pipeline",
    prompt:
      "Create a GitHub Actions workflow for our Next.js app. Run Prettier check, ESLint, TypeScript checking, and Jest tests. Use pnpm for package management. Cache dependencies appropriately.",
  },
  {
    scenario: "Automating deployment to multiple environments",
    prompt:
      "Set up a deployment pipeline that: deploys to staging on merge to develop, deploys to production on release tags, runs smoke tests after each deployment, and rolls back automatically if smoke tests fail.",
  },
  {
    scenario: "Adding security scanning",
    prompt:
      "Add security scanning to our existing pipeline. Use npm audit for dependencies, run SAST with CodeQL, scan Docker images with Trivy, and fail the build on high-severity issues.",
  },
  {
    scenario: "Optimizing pipeline performance",
    prompt:
      "Our CI pipeline takes 15 minutes to run. Analyze the workflow and suggest optimizations: better caching, job parallelization, and removing redundant steps.",
  },
] as const;

const outputs = [
  {
    output: "Updated pipeline",
    description:
      "Complete YAML configuration files for your CI/CD platform with jobs, steps, caching, and environment variables properly configured",
  },
  {
    output: "Automated checks",
    description:
      "Quality gates including tests, linting, type checking, security scans, and custom validation scripts",
  },
  {
    output: "Release notes",
    description:
      "Automated changelog generation, version bumping, and release documentation as part of the deployment process",
  },
  {
    output: "Deployment scripts",
    description:
      "Infrastructure-as-code configurations, deployment scripts, and rollback procedures for safe production releases",
  },
] as const;

const bestPractices = [
  "Start with essential checks (lint, test) before adding advanced features like deployments",
  "Use matrix strategies to test across multiple versions, platforms, or configurations in parallel",
  "Implement proper caching to speed up pipelines—cache dependencies, build artifacts, and test results",
  "Fail fast by running quick checks first, saving expensive operations for after basic validation passes",
  "Secure your pipeline with least-privilege permissions, secret scanning, and approval gates for production",
] as const;

const commonPitfalls = [
  {
    pitfall: "Hardcoding secrets in workflow files",
    solution:
      "Always use your platform's secret management. Ask Claude: 'Show me how to properly reference secrets in this workflow without exposing them.'",
  },
  {
    pitfall: "Running expensive operations on every commit",
    solution:
      "Use conditional execution. Run full test suites on PR updates, but quick lint checks on every push. Deploy only on specific branches or tags.",
  },
  {
    pitfall: "No pipeline testing before merging",
    solution:
      "Always test workflow changes in a feature branch first. Pipeline failures on main block everyone's work.",
  },
] as const;

const tips = [
  {
    tip: "Use workflow templates for consistency",
    example:
      '"Create reusable workflow templates for our common patterns: Node.js CI, Docker builds, and Terraform deployments. Other repos should be able to reference these."',
  },
  {
    tip: "Add pipeline status visibility",
    example:
      '"Set up Slack notifications for pipeline failures. Include: which job failed, error message, commit author, and link to logs."',
  },
  {
    tip: "Implement preview deployments",
    example:
      '"For each PR, deploy a preview environment with a unique URL. Add a comment to the PR with the preview link when deployment succeeds."',
  },
] as const;

const related = [
  { title: "Test Generation", path: "/workflows/claude-code/test-generation" },
  { title: "Build Systems", path: "/workflows/claude-code/build-systems" },
  { title: "Refactoring", path: "/workflows/claude-code/refactoring" },
] as const;

export default function CICDAutomationWorkflowPage() {
  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        
        { label: "Claude Code", href: "/use-cases/claude-code" },
        { label: "CI/CD Automation" },
      ]}
      eyebrow="Workflow"
      title="CI/CD Automation"
      description="Automate tests, checks, and release steps in your pipeline."
    >
      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Overview</h2>
        <p className="text-sm text-muted-foreground">{overview.description}</p>
        <div className=" bg-background/50 p-4">
          <div className="text-xs tracking-widest text-[#c9b8a0]/70 mb-2">
            When to use
          </div>
          <p className="text-sm text-muted-foreground">{overview.when}</p>
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Step-by-step process</h2>
        <div className="grid gap-6">
          {steps.map((item, index) => (
            <div key={item.step} className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] rounded-md text-xs font-medium">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-serif italic text-lg">{item.step}</h3>
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

      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Example prompts</h2>
        <div className="grid gap-4">
          {examplePrompts.map((item) => (
            <div
              key={item.scenario}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <div className="mb-2 text-xs tracking-widest text-[#c9b8a0]/70">
                {item.scenario}
              </div>
              <p className="text-sm italic text-muted-foreground">"{item.prompt}"</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Expected outputs</h2>
        <div className="grid gap-4">
          {outputs.map((item) => (
            <div
              key={item.output}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg">{item.output}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Best practices</h2>
        <div className="grid gap-3 text-sm text-muted-foreground">
          {bestPractices.map((practice) => (
            <div
              key={practice}
              className=" border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3"
            >
              {practice}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Common pitfalls</h2>
        <div className="grid gap-4">
          {commonPitfalls.map((item) => (
            <div
              key={item.pitfall}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg text-orange-600/90">{item.pitfall}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                <span className="font-medium">Solution: </span>
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6  border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Pro tips</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {tips.map((item) => (
            <div
              key={item.tip}
              className=" border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] rounded-2xl p-5"
            >
              <h3 className="font-serif italic text-lg">{item.tip}</h3>
              <p className="mt-2 text-sm italic text-muted-foreground">"{item.example}"</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4  border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] rounded-3xl p-12 md:p-16">
        <h2 className="font-serif italic text-2xl">Related workflows</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {related.map((item) => (
            <a
              key={item.title}
              href={item.path}
              className=" border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3 text-sm transition hover:border-[#a78b71] hover:text-[#c9b8a0]"
            >
              {item.title}
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}