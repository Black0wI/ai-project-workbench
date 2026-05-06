.PHONY: help bootstrap check doctor new-project-check design-templates design-previews apply-design skills-scan skills-recommend skills-list

help:
	@echo "Available commands:"
	@echo "  make bootstrap           Prepare local environment"
	@echo "  make check               Validate template structure"
	@echo "  make doctor              Check local tool availability"
	@echo "  make new-project-check   Detect template values in derived projects"
	@echo "  make design-templates    List available DESIGN.md presets"
	@echo "  make design-previews     Generate static HTML previews for design presets"
	@echo "  make apply-design DESIGN=templates/design/saas-ops.DESIGN.md"
	@echo "  make skills-scan         Scan local skills with SkillKit"
	@echo "  make skills-recommend    Show SkillKit skill recommendations"
	@echo "  make skills-list         List SkillKit-managed skills"

bootstrap:
	./scripts/bootstrap.sh

check:
	./scripts/check-template.sh

doctor:
	./scripts/doctor.sh

new-project-check:
	./scripts/new-project-check.sh

design-templates:
	@find templates/design -name '*.DESIGN.md' -maxdepth 1 | sort

design-previews:
	node scripts/design/generate-design-previews.mjs

apply-design:
	@test -n "$(DESIGN)" || (echo "Usage: make apply-design DESIGN=templates/design/<preset>.DESIGN.md" && exit 1)
	./scripts/apply-design-template.sh "$(DESIGN)"

skills-scan:
	./scripts/skillkit-scan.sh

skills-recommend:
	npx --omit=optional skillkit recommend

skills-list:
	npx --omit=optional skillkit list
