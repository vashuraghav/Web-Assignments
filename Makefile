.PHONY: start stop

start:
	@echo Starting Backend Server
	@cd backend && npm install && npm start > /dev/null 2>&1 &
	@echo Backend Server is up and running
	@echo Starting Frontend Server
	@cd my-app && npm install && npm start > /dev/null 2>&1 &
	@echo Frontend Server is up and running

stop:
	@echo Stopping Backend Server
	@cd backend && npm stop
	@echo Backend Server stopped
	@echo Stopping Frontend Server
	@cd my-app && npm stop
	@echo Frontend Server stopped
