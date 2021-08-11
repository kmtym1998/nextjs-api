.DEFAULT_GOAL := usage
environment=development
MAKEFILE_DIR := $(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))
MAKEFILE_PATH := ${MAKEFILE_DIR}/Makefile
make := make -f ${MAKEFILE_PATH}

init:
	rm -rf .git
	git init
	yarn install
	git add .
	git commit -m "テンプレートからコピー"

usage:
	@echo usage: [css]

css: # create moduled css file
	if [ -n "$$filename" ]; then $(make) create-template-css; fi

create-template-css:
	echo \@import url\(\'https\:\/\/fonts.googleapis.com\/css2?family\=DotGothic16\&family\=Hachi\+Maru\+Pop\&family\=Noto\+Sans\+JP\:wght\@400\;700\;900\&family\=RocknRoll\+One\&display\=swap\'\)\; >> src/styles/$(filename).module.css
	echo >> src/styles/$(filename).module.css
	echo \/\*>> src/styles/$(filename).module.css
	echo \ \* CSS rules to specify families>> src/styles/$(filename).module.css
	echo \ \* font\-family\: \'DotGothic16\'\, sans-serif\;>> src/styles/$(filename).module.css
	echo \ \* font\-family\: \'Hachi Maru Pop\'\, cursive\;>> src/styles/$(filename).module.css
	echo \ \* font\-family\: \'RocknRoll One\'\, sans-serif\;>> src/styles/$(filename).module.css
	echo \ \* font\-family\: \'Noto Sans JP\'\, sans-serif\;>> src/styles/$(filename).module.css
	echo \ \* \- font\-weight\: 400\, 700 and 900 are available>> src/styles/$(filename).module.css
	echo \ \*/>> src/styles/$(filename).module.css
	echo >> src/styles/$(filename).module.css
	echo \/\*>> src/styles/$(filename).module.css
	echo \ \* Colors used on the project>> src/styles/$(filename).module.css
	echo \ \* \#eceff1 blueGrey\[50\]>> src/styles/$(filename).module.css
	echo \ \* \#f44336 red\[500\]>> src/styles/$(filename).module.css
	echo \ \* \#263238 blueGrey\[900\]>> src/styles/$(filename).module.css
	echo \ \* \#212121 grey\[900\]>> src/styles/$(filename).module.css
	echo \ \*\/>> src/styles/$(filename).module.css
