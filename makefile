init:
	@if [ -f db/development.sqlite3 ]; then \
 		rm db/development.sqlite3; \
		echo "Remove db/development.sqlite3"; \
	fi;
	cp db/development.sqlite3.tmp db/development.sqlite3