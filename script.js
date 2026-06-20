/**
 * Microservices & APIs Tutorial — navigation, TOC, and 100 MCQs (10 per section).
 * Correct answers are evenly distributed across positions A–D (25 each).
 */

const SECTIONS = [
  { id: 'prerequisites', label: '1. Prerequisites' },
  { id: 'what-is-api', label: '2. What Is an API?' },
  { id: 'rest-http', label: '3. REST & HTTP Methods' },
  { id: 'microservices', label: '4. Microservices' },
  { id: 'cicd-automation', label: '5. CI/CD & Automation' },
  { id: 'fastapi-setup', label: '6. FastAPI & uvicorn' },
  { id: 'get-endpoints', label: '7. GET Endpoints' },
  { id: 'post-endpoints', label: '8. POST Endpoints' },
  { id: 'edit-delete-endpoints', label: '9. PUT/PATCH & DELETE' },
  { id: 'production-cicd', label: '10. Production & CI/CD' },
];

/** correctIndex in data; renderQuizzes rebalances to 25 per letter (A–D) across all 100. */
const QUIZ_DATA = {
  prerequisites: [
    {
      q: 'What is the minimum Python version recommended for this tutorial?',
      options: ['Python 3.10 or newer', 'Python 2.7', 'Python 3.5', 'Any version works'],
      correctIndex: 0,
      explanation: 'Python 3.10+ provides modern syntax and better type-hint support that FastAPI relies on. Python 2 is end-of-life and incompatible.',
    },
    {
      q: 'Which tool comes bundled with Python for installing packages?',
      options: ['Docker', 'pip', 'npm', 'Gradle'],
      correctIndex: 1,
      explanation: 'pip is Python\'s standard package installer. npm is for Node.js; Docker and Gradle serve different purposes.',
    },
    {
      q: 'Why is Git listed as a prerequisite?',
      options: ['It replaces Python', 'It is only for designers', 'Version control enables collaboration and CI/CD pipelines', 'It runs FastAPI servers'],
      correctIndex: 2,
      explanation: 'Git tracks code changes and integrates with CI/CD systems like GitHub Actions that automate testing and deployment.',
    },
    {
      q: 'What command checks whether Python is installed?',
      options: ['git --version', 'node -v', 'docker ps', 'python --version'],
      correctIndex: 3,
      explanation: 'Running python --version (or python3 --version) prints the installed Python version in your terminal.',
    },
    {
      q: 'Which of these is NOT required before starting?',
      options: ['Expert knowledge of Kubernetes', 'A code editor', 'Basic programming concepts', 'A terminal / command line'],
      correctIndex: 0,
      explanation: 'This tutorial targets beginners. Kubernetes expertise is not required; familiarity with an editor and terminal is enough.',
    },
    {
      q: 'What does "elementary programming concepts" refer to in the prerequisites?',
      options: ['Knowing every Python library', 'Variables and functions', 'Writing assembly language', 'Managing cloud billing'],
      correctIndex: 1,
      explanation: 'Understanding variables, functions, and basic logic is sufficient. Deep framework knowledge comes later in the tutorial.',
    },
    {
      q: 'A code editor like VS Code or Cursor is used to:',
      options: ['Host websites in production', 'Replace the need for Python', 'Write and edit source code comfortably', 'Automatically deploy to AWS'],
      correctIndex: 2,
      explanation: 'Editors provide syntax highlighting, debugging, and file management for writing code. Deployment requires separate tools.',
    },
    {
      q: 'What should you see after running python --version successfully?',
      options: ['A blank screen', 'An error about Git', 'A list of all installed packages', 'A version number like 3.12.x'],
      correctIndex: 3,
      explanation: 'A successful check prints the Python version string, confirming Python is installed and on your PATH.',
    },
    {
      q: 'Which statement about prerequisites is TRUE?',
      options: ['You must be an expert programmer', 'You need only basic computer literacy and willingness to learn', 'You must own a server', 'You need a paid cloud account'],
      correctIndex: 1,
      explanation: 'The tutorial is designed for absolute beginners with basic computer skills and curiosity — not experts or paid infrastructure.',
    },
    {
      q: 'Why is comfort with the command line helpful?',
      options: ['APIs only work in terminals', 'You will run pip, uvicorn, and git commands from the terminal', 'Browsers cannot call APIs', 'FastAPI forbids graphical editors'],
      correctIndex: 1,
      explanation: 'Installing packages, starting servers, and using Git are commonly done via terminal commands during API development.',
    },
  ],

  'what-is-api': [
    {
      q: 'What does API stand for?',
      options: ['Application Programming Interface', 'Automated Program Installation', 'Advanced Protocol Integration', 'Application Process Index'],
      correctIndex: 0,
      explanation: 'API expands to Application Programming Interface — a defined way for programs to communicate.',
    },
    {
      q: 'In the restaurant analogy, the API is like:',
      options: ['The chef\'s secret recipe book', 'The menu that customers order from', 'The dining room furniture', 'The food itself'],
      correctIndex: 1,
      explanation: 'Clients order from a menu (the API) without needing to know how the kitchen prepares each dish (implementation details).',
    },
    {
      q: 'When a weather app shows the forecast, it most likely:',
      options: ['Measures temperature with phone sensors only', 'Guesses based on the season', 'Calls a weather service API for data', 'Reads data from your photo gallery'],
      correctIndex: 2,
      explanation: 'Weather apps fetch structured data from remote weather APIs rather than measuring conditions locally.',
    },
    {
      q: 'API responses on the web are commonly formatted as:',
      options: ['Binary image files only', 'Handwritten PDFs', 'Microsoft Word documents', 'JSON'],
      correctIndex: 3,
      explanation: 'JSON (JavaScript Object Notation) is the dominant format for web API data exchange due to its readability and universal support.',
    },
    {
      q: 'An API allows one program to:',
      options: ['Use another program\'s features without knowing internal details', 'Delete the other program\'s source code', 'Run without any network', 'Replace the operating system'],
      correctIndex: 0,
      explanation: 'APIs expose a contract (endpoints and data shapes) while hiding implementation, enabling modular software design.',
    },
    {
      q: 'The "client" in a client-server API model is typically:',
      options: ['The physical server rack', 'The app making the request (browser, mobile app, etc.)', 'The database engine only', 'The power supply unit'],
      correctIndex: 1,
      explanation: 'The client initiates requests; the server processes them and returns responses.',
    },
    {
      q: 'Which is an example of using an API?',
      options: ['Saving a file to your desktop offline', 'Typing in a word processor with no internet', 'A login button that verifies credentials with a server', 'Changing your desktop wallpaper locally'],
      correctIndex: 2,
      explanation: 'Login flows send credentials to an authentication API on a server to verify the user.',
    },
    {
      q: 'APIs are important in microservices because:',
      options: ['They eliminate the need for databases', 'They make all services run on one machine', 'They replace HTTP entirely', 'Services communicate with each other through well-defined APIs'],
      correctIndex: 3,
      explanation: 'Microservices are independent deployable units that coordinate via network APIs (usually HTTP/REST or gRPC).',
    },
    {
      q: 'What travels from client to server in the diagram?',
      options: ['HTTP Request', 'JSON Response only', 'Physical cables', 'Desktop icons'],
      correctIndex: 0,
      explanation: 'The client sends an HTTP request; the server responds with data (often JSON) in an HTTP response.',
    },
    {
      q: 'An interface in "Application Programming Interface" means:',
      options: ['A graphical user interface only', 'A agreed-upon way to interact with something', 'A type of computer monitor', 'A keyboard layout'],
      correctIndex: 1,
      explanation: 'An interface defines how to interact with a system — which requests are allowed and what responses look like.',
    },
  ],

  'rest-http': [
    {
      q: 'REST stands for:',
      options: ['Representational State Transfer', 'Remote Execution Service Technology', 'Reliable Ethernet Standard Transfer', 'Rapid Endpoint System Toolkit'],
      correctIndex: 0,
      explanation: 'REST is an architectural style for networked APIs using standard HTTP methods and resource-oriented URLs.',
    },
    {
      q: 'Which HTTP method is used to READ data without changing it?',
      options: ['DELETE', 'GET', 'POST', 'PATCH'],
      correctIndex: 1,
      explanation: 'GET retrieves resources safely and idempotently — it should not modify server state.',
    },
    {
      q: 'POST is typically used to:',
      options: ['Delete all records', 'Read a single record by ID', 'Create a new resource', 'Shut down the server'],
      correctIndex: 2,
      explanation: 'POST sends a body to the server to create new resources, such as a new order or user account.',
    },
    {
      q: 'Which status code means "resource not found"?',
      options: ['200', '201', '500', '404'],
      correctIndex: 3,
      explanation: '404 Not Found indicates the requested URL or resource ID does not exist on the server.',
    },
    {
      q: 'HTTP 200 OK generally means:',
      options: ['The request succeeded', 'The server crashed', 'Authentication failed', 'The resource was deleted'],
      correctIndex: 0,
      explanation: '2xx status codes indicate success. 200 OK is the standard response for successful GET, PUT, or PATCH requests.',
    },
    {
      q: 'PUT and PATCH are used for:',
      options: ['Creating backups only', 'Updating existing resources', 'Downloading images', 'Sending email'],
      correctIndex: 1,
      explanation: 'PUT typically replaces a resource; PATCH applies partial updates to existing data.',
    },
    {
      q: 'DELETE is analogous to:',
      options: ['Reading a menu', 'Placing a new order', 'Canceling or removing an order', 'Printing a receipt'],
      correctIndex: 2,
      explanation: 'DELETE removes a resource from the server, like canceling an order from a system.',
    },
    {
      q: 'A REST resource is usually identified by:',
      options: ['Random memory addresses', 'The CPU serial number', 'The programmer\'s name', 'A URL path like /items/42'],
      correctIndex: 3,
      explanation: 'REST uses URLs (URIs) to identify resources. /items/42 refers to item with ID 42.',
    },
    {
      q: 'HTTP 500 indicates:',
      options: ['A server-side error', 'Successful creation', 'Client sent bad syntax', 'Resource moved permanently'],
      correctIndex: 0,
      explanation: '5xx codes are server errors — something went wrong on the backend while processing a valid request.',
    },
    {
      q: 'CRUD maps to HTTP methods as: Create →',
      options: ['GET', 'POST', 'DELETE', 'HEAD'],
      correctIndex: 1,
      explanation: 'CRUD: Create=POST, Read=GET, Update=PUT/PATCH, Delete=DELETE.',
    },
  ],

  microservices: [
    {
      q: 'A monolithic application is:',
      options: ['One large codebase handling many features', 'A collection of 100 tiny databases', 'A type of network cable', 'A frontend-only website'],
      correctIndex: 0,
      explanation: 'Monoliths bundle users, payments, inventory, etc. into a single deployable application.',
    },
    {
      q: 'Microservices split an application into:',
      options: ['One giant file', 'Small, independent services that communicate via APIs', 'Only static HTML pages', 'Unrelated desktop programs'],
      correctIndex: 1,
      explanation: 'Each microservice owns a bounded capability and exposes APIs for other services to call.',
    },
    {
      q: 'An API Gateway in microservices often:',
      options: ['Replaces all databases', 'Writes frontend CSS', 'Routes external requests to the correct internal service', 'Eliminates the need for HTTP'],
      correctIndex: 2,
      explanation: 'Gateways provide a single entry point, handling routing, auth, and rate limiting for backend services.',
    },
    {
      q: 'A key benefit of microservices is:',
      options: ['Zero network latency', 'No need for testing', 'Guaranteed lower costs always', 'Independent deployment and scaling of services'],
      correctIndex: 3,
      explanation: 'Teams can deploy and scale individual services (e.g., payment during sales) without redeploying everything.',
    },
    {
      q: 'A trade-off of microservices is:',
      options: ['Increased operational complexity', 'Impossible to test', 'No use for APIs', 'Only works without internet'],
      correctIndex: 0,
      explanation: 'Distributed systems require service discovery, monitoring, and handling network failures — more DevOps overhead.',
    },
    {
      q: 'In the restaurant analogy, microservices are like:',
      options: ['One chef doing everything', 'Specialized stations (grill, pastry, salad)', 'Closing the restaurant', 'A single cash register with no kitchen'],
      correctIndex: 1,
      explanation: 'Specialized stations mirror focused services that excel at one job and coordinate to fulfill orders.',
    },
    {
      q: 'Each microservice often has:',
      options: ['Its own codebase and possibly its own database', 'No source code', 'The same database table as every other service', 'No network interface'],
      correctIndex: 2,
      explanation: 'Database-per-service is a common pattern to keep services decoupled, though it adds data consistency challenges.',
    },
    {
      q: 'Microservices communicate primarily through:',
      options: ['Shared USB drives', 'Printed reports', 'Shouting across the office', 'Network calls (HTTP APIs, message queues, etc.)'],
      correctIndex: 3,
      explanation: 'Services interact over networks using APIs or asynchronous messaging rather than in-process function calls.',
    },
    {
      q: 'When should you adopt microservices?',
      options: ['When you have clear boundaries and need independent scaling — not on day one of every project', 'Always, even for a hello-world app', 'Never, under any circumstances', 'Only when you have no developers'],
      correctIndex: 0,
      explanation: 'Start simple; adopt microservices when team scale or deployment needs justify the added complexity.',
    },
    {
      q: 'Service independence means:',
      options: ['Services never talk to each other', 'A team can update one service without redeploying the entire monolith', 'All services share one git commit always', 'Services run only on Fridays'],
      correctIndex: 1,
      explanation: 'Independent deployability is a core microservices benefit — faster, safer releases per domain.',
    },
  ],

  'cicd-automation': [
    {
      q: 'CI stands for:',
      options: ['Continuous Integration', 'Centralized Installation', 'Code Inspection', 'Cloud Interface'],
      correctIndex: 0,
      explanation: 'CI automatically builds and tests code whenever developers integrate changes into a shared repository.',
    },
    {
      q: 'CD in CI/CD often refers to:',
      options: ['Compact Disk', 'Continuous Delivery or Continuous Deployment', 'Code Deletion', 'Central Database'],
      correctIndex: 1,
      explanation: 'CD automates getting tested code to staging or production environments reliably and repeatedly.',
    },
    {
      q: 'A CI pipeline typically runs on:',
      options: ['Only the developer\'s birthday', 'Never', 'Every commit or pull request', 'Only after manual paper approval'],
      correctIndex: 2,
      explanation: 'Automated pipelines trigger on git events to catch bugs early before they reach production.',
    },
    {
      q: 'GitHub Actions is an example of:',
      options: ['A Python web framework', 'A database engine', 'A mobile game', 'A CI/CD automation platform'],
      correctIndex: 3,
      explanation: 'GitHub Actions runs workflows (build, test, deploy) in response to repository events.',
    },
    {
      q: 'Why run tests in CI for APIs?',
      options: ['To catch regressions before deployment', 'To slow down development intentionally', 'Because pytest is mandatory by law', 'To replace documentation'],
      correctIndex: 0,
      explanation: 'Automated tests verify endpoints still work after changes, preventing broken releases.',
    },
    {
      q: 'Linting in a pipeline checks for:',
      options: ['Restaurant menu prices', 'Code style and common errors', 'Employee vacation days', 'Hardware temperature'],
      correctIndex: 1,
      explanation: 'Linters (flake8, ruff, etc.) enforce consistent style and flag suspicious patterns in source code.',
    },
    {
      q: 'Staging environment is used to:',
      options: ['Store coffee recipes', 'Replace production permanently', 'Test deployments in a production-like setting before going live', 'Delete all user data daily'],
      correctIndex: 2,
      explanation: 'Staging mirrors production closely so teams can validate releases without affecting real users.',
    },
    {
      q: 'Docker images in API CI/CD are used to:',
      options: ['Print documents', 'Play music', 'Send handwritten letters', 'Package the app and dependencies for consistent deployment'],
      correctIndex: 3,
      explanation: 'Containers bundle code, runtime, and libraries so the app runs the same everywhere.',
    },
    {
      q: 'Continuous Deployment means:',
      options: ['Every passing build can automatically go to production', 'Code is never deployed', 'Only manual FTP uploads', 'Deployment happens once per decade'],
      correctIndex: 0,
      explanation: 'With sufficient test coverage and safeguards, CD can auto-release approved builds to production.',
    },
    {
      q: 'The first step in the pipeline diagram is typically:',
      options: ['Production monitoring', 'Git push / code commit', 'User logout', 'Database backup only'],
      correctIndex: 1,
      explanation: 'Pipelines start when new code is pushed to the repository, triggering build and test stages.',
    },
  ],

  'fastapi-setup': [
    {
      q: 'FastAPI is written in:',
      options: ['Python', 'Java', 'Ruby', 'PHP'],
      correctIndex: 0,
      explanation: 'FastAPI is a modern Python framework leveraging type hints and Pydantic for validation.',
    },
    {
      q: 'uvicorn\'s role is to:',
      options: ['Design HTML pages', 'Run the ASGI application (serve HTTP requests)', 'Replace Git', 'Compile C++ code'],
      correctIndex: 1,
      explanation: 'uvicorn is a lightning-fast ASGI server that hosts FastAPI apps and handles HTTP connections.',
    },
    {
      q: 'Install FastAPI and uvicorn with:',
      options: ['npm install fastapi', 'apt install microsoft-word', 'pip install fastapi uvicorn[standard]', 'brew install coffee'],
      correctIndex: 2,
      explanation: 'pip is Python\'s package manager. The [standard] extra includes useful performance dependencies.',
    },
    {
      q: 'The --reload flag in uvicorn:',
      options: ['Deletes your database', 'Disables all routes', 'Forces HTTPS only', 'Restarts the server when code changes (development)'],
      correctIndex: 3,
      explanation: '--reload enables auto-restart on file changes — great for development, not recommended for production.',
    },
    {
      q: 'FastAPI automatically provides interactive API docs at:',
      options: ['/docs (Swagger UI)', '/secret-admin-only', '/no-documentation', '/wordpress'],
      correctIndex: 0,
      explanation: 'Visit /docs for Swagger UI and /redoc for ReDoc — generated from your route definitions and models.',
    },
    {
      q: 'In uvicorn main:app, "main" refers to:',
      options: ['The Python filename main.py (without .py)', 'The main() function only', 'The primary database', 'The CEO of the company'],
      correctIndex: 1,
      explanation: 'uvicorn takes module:app — the Python file module name and the FastAPI instance variable (usually app).',
    },
    {
      q: 'FastAPI uses ______ for request/response validation:',
      options: ['Microsoft Excel', 'Random number generators', 'Pydantic models and type hints', 'Handwritten JSON only'],
      correctIndex: 2,
      explanation: 'Pydantic validates incoming data against Python types, returning clear errors for invalid payloads.',
    },
    {
      q: 'ASGI stands for:',
      options: ['Advanced SQL Graph Interface', 'Automated Server Gateway Index', 'Application Source Git Integration', 'Asynchronous Server Gateway Interface'],
      correctIndex: 3,
      explanation: 'ASGI is the async successor to WSGI, supporting WebSockets and async Python web frameworks.',
    },
    {
      q: 'A minimal FastAPI app must include:',
      options: ['An instance of FastAPI() and at least one route decorator', 'A Kubernetes cluster', 'A paid API key', '1000 lines of boilerplate'],
      correctIndex: 0,
      explanation: 'You can start with just FastAPI(), a route, and uvicorn — complexity grows as needed.',
    },
    {
      q: 'Binding to 0.0.0.0 means:',
      options: ['Only localhost can connect', 'The server accepts connections from any network interface', 'The server is disabled', 'Port 8000 is blocked'],
      correctIndex: 1,
      explanation: '0.0.0.0 listens on all interfaces, allowing access from other machines on the network (use carefully in production).',
    },
  ],

  'get-endpoints': [
    {
      q: '@app.get("/items") defines:',
      options: ['A GET endpoint at path /items', 'A DELETE endpoint', 'A database table', 'A CSS stylesheet'],
      correctIndex: 0,
      explanation: 'The decorator registers a function to handle HTTP GET requests to the /items URL path.',
    },
    {
      q: 'Path parameters like /items/{item_id} are used to:',
      options: ['Style the webpage', 'Identify a specific resource by ID', 'Encrypt passwords', 'Send email attachments'],
      correctIndex: 1,
      explanation: 'Curly braces in the path capture values (e.g., item_id=5) and pass them as function arguments.',
    },
    {
      q: 'Query parameters like ?skip=0&limit=10 are useful for:',
      options: ['Changing HTTP to FTP', 'Deleting the server', 'Pagination and filtering', 'Installing Python packages'],
      correctIndex: 2,
      explanation: 'Query strings pass optional filters. skip and limit implement pagination over large result sets.',
    },
    {
      q: 'HTTPException(status_code=404) should be raised when:',
      options: ['The server starts successfully', 'A POST creates a resource', 'All tests pass', 'The requested item does not exist'],
      correctIndex: 3,
      explanation: 'Raise 404 when a specific resource ID is not found so clients receive a proper error response.',
    },
    {
      q: 'GET requests should be:',
      options: ['Safe and idempotent (not change server state)', 'Always create new records', 'Always require a JSON body', 'Used only for deleting data'],
      correctIndex: 0,
      explanation: 'GET reads data. Repeated GETs should not modify resources — that is what POST/PUT/PATCH/DELETE are for.',
    },
    {
      q: 'response_model in @app.get helps with:',
      options: ['Cooking pasta', 'Documenting and validating the response shape', 'Changing the TCP port', 'Disabling HTTPS'],
      correctIndex: 1,
      explanation: 'response_model filters/validates outgoing data and improves OpenAPI schema generation.',
    },
    {
      q: 'curl http://localhost:8000/items performs:',
      options: ['A DELETE request', 'A file download from GitHub', 'A GET request to list items', 'A database migration'],
      correctIndex: 2,
      explanation: 'curl without -X defaults to GET, retrieving the items collection from the running API.',
    },
    {
      q: 'Returning a Python list from a GET handler produces:',
      options: ['A binary ZIP file', 'An empty response', 'A redirect to Google', 'A JSON array in the HTTP response'],
      correctIndex: 3,
      explanation: 'FastAPI serializes Python lists and dicts to JSON automatically in the response body.',
    },
    {
      q: 'In-memory lists like items_db are used in tutorials because:',
      options: ['They simplify learning before introducing real databases', 'They are production best practice for banks', 'FastAPI requires them', 'They persist data after server restart'],
      correctIndex: 0,
      explanation: 'In-memory storage is ephemeral and simple — good for learning CRUD before PostgreSQL or MongoDB.',
    },
    {
      q: 'To fetch item with id 1, the path would be:',
      options: ['/items?id=delete', '/items/1', '/items/create', '/delete/items'],
      correctIndex: 1,
      explanation: 'REST convention uses /items/1 where 1 is the path parameter for the resource identifier.',
    },
  ],

  'post-endpoints': [
    {
      q: '@app.post("/items") is used to:',
      options: ['Create a new item', 'Read all items', 'Delete the server', 'Download logs'],
      correctIndex: 0,
      explanation: 'POST to a collection URL creates a new resource and returns it, often with 201 Created.',
    },
    {
      q: 'status_code=status.HTTP_201_CREATED indicates:',
      options: ['Server error', 'Resource successfully created', 'Page not found', 'Unauthorized access'],
      correctIndex: 1,
      explanation: '201 Created is the standard HTTP status for successful POST requests that create resources.',
    },
    {
      q: 'Pydantic BaseModel is used to:',
      options: ['Run uvicorn faster', 'Replace Python entirely', 'Define and validate the shape of request data', 'Style HTML buttons'],
      correctIndex: 2,
      explanation: 'Models declare expected fields and types; FastAPI returns 422 if the JSON body is invalid.',
    },
    {
      q: 'item.model_dump() (Pydantic v2) converts a model to:',
      options: ['A SQL query', 'An image file', 'A Git commit hash', 'A plain Python dictionary'],
      correctIndex: 3,
      explanation: 'model_dump() exports model fields as a dict, convenient for merging into database records.',
    },
    {
      q: 'POST requests typically send data in:',
      options: ['The JSON request body', 'The URL only, never a body', 'A floppy disk', 'The CSS file'],
      correctIndex: 0,
      explanation: 'POST carries resource data in the body with Content-Type: application/json for APIs.',
    },
    {
      q: 'Content-Type: application/json tells the server:',
      options: ['To ignore the body', 'The request body is JSON formatted', 'To return HTML only', 'To delete all records'],
      correctIndex: 1,
      explanation: 'The Content-Type header describes the body format so the server can parse it correctly.',
    },
    {
      q: 'Auto-incrementing next_id in tutorials simulates:',
      options: ['Random UUID generation only', 'Network latency', 'Database-generated primary keys', 'User authentication'],
      correctIndex: 2,
      explanation: 'Databases often auto-assign integer IDs; next_id mimics that pattern in memory.',
    },
    {
      q: 'Invalid POST data (wrong types) in FastAPI returns:',
      options: ['200 OK with empty body', '201 Created always', '500 with no details', '422 Unprocessable Entity with validation errors'],
      correctIndex: 3,
      explanation: 'FastAPI/Pydantic validation failures return 422 with a detailed JSON error describing each field issue.',
    },
    {
      q: 'curl -X POST specifies:',
      options: ['The HTTP method POST', 'A GET request', 'A PATCH request', 'A HEAD request'],
      correctIndex: 0,
      explanation: '-X overrides the default GET method so curl sends a POST request.',
    },
    {
      q: 'After creating an item, the API typically returns:',
      options: ['Nothing ever', 'The created object including its new id', 'Only HTTP headers, never a body', 'The entire database dump'],
      correctIndex: 1,
      explanation: 'Returning the created resource (with server-assigned id) lets clients confirm and use the new record.',
    },
  ],

  'edit-delete-endpoints': [
    {
      q: 'PUT is generally used for:',
      options: ['Full replacement of a resource', 'Reading data only', 'Sending spam', 'Logging out users'],
      correctIndex: 0,
      explanation: 'PUT replaces the entire resource at the given URL. All fields should be provided for a true replace.',
    },
    {
      q: 'PATCH differs from PUT because PATCH:',
      options: ['Deletes the database', 'Updates only the fields you send', 'Creates duplicate servers', 'Only works on Sundays'],
      correctIndex: 1,
      explanation: 'PATCH applies partial updates — send only {"price": 9.99} to change just the price field.',
    },
    {
      q: 'model_dump(exclude_unset=True) is useful for PATCH because:',
      options: ['It encrypts passwords', 'It deletes all items', 'It includes only fields the client actually sent', 'It changes HTTP to FTP'],
      correctIndex: 2,
      explanation: 'exclude_unset omits default None values for fields not in the request, enabling true partial updates.',
    },
    {
      q: 'DELETE /items/1 with status 204 means:',
      options: ['Item was created', 'Item was not found always', 'Server error occurred', 'Item deleted successfully with no response body'],
      correctIndex: 3,
      explanation: '204 No Content is common for DELETE — success with nothing to return in the body.',
    },
    {
      q: 'find_item helper functions reduce:',
      options: ['Duplicate lookup logic across routes', 'API performance to zero', 'The need for HTTP', 'Python version requirements'],
      correctIndex: 0,
      explanation: 'Shared helpers keep DRY code — one place to find items and raise 404 consistently.',
    },
    {
      q: 'Optional[str] = None in ItemUpdate means:',
      options: ['The field is required always', 'The field may be omitted for partial updates', 'The field must be empty string only', 'The field deletes the record'],
      correctIndex: 1,
      explanation: 'Optional with default None lets clients omit fields they do not want to change in PATCH requests.',
    },
    {
      q: 'Merging with {**item, **patch_data} in Python:',
      options: ['Deletes the item', 'Creates a new HTTP server', 'Combines existing item dict with updated fields', 'Converts JSON to XML only'],
      correctIndex: 2,
      explanation: 'Dictionary unpacking overlays patch_data onto item, preserving unchanged keys.',
    },
    {
      q: 'After DELETE, a subsequent GET for that id should return:',
      options: ['200 with the old data', '201 Created', '500 always', '404 Not Found'],
      correctIndex: 3,
      explanation: 'Once deleted, the resource no longer exists — GET should raise or return 404.',
    },
    {
      q: 'curl -X PATCH sends:',
      options: ['A partial update request', 'A GET request', 'A DELETE request', 'A DNS lookup'],
      correctIndex: 0,
      explanation: '-X PATCH tells curl to use the PATCH HTTP method for partial resource updates.',
    },
    {
      q: 'Editing a resource in REST uses HTTP methods:',
      options: ['GET or HEAD', 'PUT or PATCH', 'CONNECT or TRACE', 'OPTIONS only'],
      correctIndex: 1,
      explanation: 'Updates are performed with PUT (full) or PATCH (partial); GET must not modify data.',
    },
  ],

  'production-cicd': [
    {
      q: 'TestClient from FastAPI is used to:',
      options: ['Test API endpoints without running a live server', 'Design logos', 'Deploy to production', 'Replace uvicorn permanently'],
      correctIndex: 0,
      explanation: 'TestClient simulates HTTP requests against your app in pytest without network overhead.',
    },
    {
      q: 'pytest is a:',
      options: ['JavaScript bundler', 'Python testing framework', 'Database migration tool', 'CSS preprocessor'],
      correctIndex: 1,
      explanation: 'pytest discovers and runs test functions, asserting expected API behavior automatically.',
    },
    {
      q: 'In CI, running pytest before deploy helps:',
      options: ['Increase bugs', 'Skip code review', 'Prevent broken code from reaching users', 'Remove all tests'],
      correctIndex: 2,
      explanation: 'Failing tests block the pipeline, ensuring only verified code gets deployed.',
    },
    {
      q: 'actions/checkout@v4 in GitHub Actions:',
      options: ['Deploys to Mars', 'Deletes the repository', 'Sends emails to users', 'Checks out your repository code onto the runner'],
      correctIndex: 3,
      explanation: 'The checkout action clones the repo so subsequent steps can build and test the code.',
    },
    {
      q: 'httpx is often installed with FastAPI tests because:',
      options: ['TestClient may depend on it for HTTP simulation', 'It replaces Python', 'It is a web browser', 'It compiles Tailwind CSS'],
      correctIndex: 0,
      explanation: 'Modern FastAPI TestClient uses httpx under the hood for in-process ASGI request testing.',
    },
    {
      q: 'Production uvicorn should NOT use:',
      options: ['--reload (use a process manager instead)', 'A valid app module', 'HTTPS termination at a reverse proxy', 'Logging and monitoring'],
      correctIndex: 1,
      explanation: '--reload is for development only. Production uses gunicorn+uvicorn workers or similar with reload disabled.',
    },
    {
      q: 'API documentation in production should be:',
      options: ['Always public with no auth', 'Never written', 'Considered carefully — may be public or protected', 'Only on paper'],
      correctIndex: 2,
      explanation: '/docs exposes your API surface. In production, restrict access or disable if sensitive.',
    },
    {
      q: 'A good microservices CI pipeline includes:',
      options: ['Only manual copy-paste deploys', 'No tests for speed', 'Skipping lint always', 'Build, test, lint, and deploy stages'],
      correctIndex: 3,
      explanation: 'Mature pipelines automate quality gates (test, lint) before progressive deployment to staging/production.',
    },
    {
      q: 'assert response.status_code == 200 in a test means:',
      options: ['The test expects a successful HTTP response', 'The server must crash', 'The test is skipped', 'DELETE was called'],
      correctIndex: 0,
      explanation: 'Assertions verify behavior. status_code == 200 confirms the endpoint returned OK as expected.',
    },
    {
      q: 'Starting with a monolith before microservices is often wise because:',
      options: ['Microservices are illegal', 'You learn domain boundaries before splitting services', 'Monoliths cannot use APIs', 'CI/CD only works on monoliths'],
      correctIndex: 1,
      explanation: 'Premature splitting adds complexity. Evolve toward microservices when clear benefits emerge.',
    },
  ],
};

const LETTERS = ['A', 'B', 'C', 'D'];

/** Swap correct answer into target position for even A–D distribution (25 each). */
function balanceOptions(item, targetIndex) {
  const options = [...item.options];
  const correctText = options[item.correctIndex];
  const displaced = options[targetIndex];
  options[targetIndex] = correctText;
  options[item.correctIndex] = displaced;
  return { options, correctIndex: targetIndex };
}

function buildToc() {
  const desktopToc = document.getElementById('desktop-toc');
  const mobileToc = document.getElementById('mobile-toc');
  if (!desktopToc || !mobileToc) return;

  SECTIONS.forEach(({ id, label }, index) => {
    const num = String(index + 1).padStart(2, '0');
    const shortLabel = label.replace(/^\d+\.\s*/, '');

    const linkClass =
      'toc-link group flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200';

    const desktopLi = document.createElement('li');
    const desktopA = document.createElement('a');
    desktopA.href = `#${id}`;
    desktopA.className = linkClass;
    desktopA.innerHTML = `<span class="toc-num flex-shrink-0 w-6 h-6 rounded-lg bg-slate-800 group-hover:bg-indigo-500/20 text-[10px] font-display font-bold flex items-center justify-center text-slate-500 group-hover:text-indigo-300 transition">${num}</span><span class="text-[13px] leading-snug">${shortLabel}</span>`;
    desktopLi.appendChild(desktopA);
    desktopToc.appendChild(desktopLi);

    const mobileLi = document.createElement('li');
    const mobileA = document.createElement('a');
    mobileA.href = `#${id}`;
    mobileA.className = linkClass;
    mobileA.innerHTML = desktopA.innerHTML;
    mobileA.addEventListener('click', closeMobileNav);
    mobileLi.appendChild(mobileA);
    mobileToc.appendChild(mobileLi);
  });
}

function renderQuizzes() {
  let globalNum = 0;

  SECTIONS.forEach(({ id }) => {
    const container = document.querySelector(`.quiz-section[data-section="${id}"]`);
    const questions = QUIZ_DATA[id];
    if (!container || !questions) return;

    const heading = document.createElement('div');
    heading.className = 'mt-12 mb-6 p-5 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-violet-500/5 to-emerald-500/10 border border-indigo-500/20';
    heading.innerHTML = `
      <h3 class="font-display text-lg font-bold text-white flex items-center gap-3">
        <span class="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white text-sm font-bold shadow-lg shadow-indigo-500/25">?</span>
        Section Quiz
        <span class="text-xs font-normal text-indigo-300/80 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">10 questions</span>
      </h3>
      <p class="text-slate-500 text-sm mt-2 ml-[52px]">Test your understanding — expand each card to reveal the answer.</p>`;
    container.appendChild(heading);

    questions.forEach((item) => {
      const targetIndex = globalNum % 4;
      globalNum += 1;
      const { options, correctIndex } = balanceOptions(item, targetIndex);

      const card = document.createElement('article');
      card.className =
        'group glass-card rounded-2xl p-5 mb-3 hover:border-indigo-500/30 transition-all duration-300';

      const qTitle = document.createElement('div');
      qTitle.className = 'flex items-start gap-3 mb-4';
      qTitle.innerHTML = `
        <span class="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-indigo-500/20 border border-white/5 flex items-center justify-center font-display font-bold text-xs text-indigo-300 transition">${globalNum}</span>
        <p class="text-white font-medium leading-relaxed pt-1">${item.q}</p>`;
      card.appendChild(qTitle);

      const opts = document.createElement('ul');
      opts.className = 'grid sm:grid-cols-2 gap-2 mb-4 ml-11';
      options.forEach((opt, oi) => {
        const li = document.createElement('li');
        li.className =
          'text-slate-400 text-sm px-3 py-2.5 rounded-xl bg-slate-900/50 border border-white/5 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition cursor-default';
        li.innerHTML = `<span class="font-display font-semibold text-indigo-400/80 mr-1.5">${LETTERS[oi]}</span>${opt}`;
        opts.appendChild(li);
      });
      card.appendChild(opts);

      const details = document.createElement('details');
      details.className = 'ml-11';

      const summary = document.createElement('summary');
      summary.className =
        'cursor-pointer select-none text-sm font-medium text-indigo-400 hover:text-indigo-300 transition list-none inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 hover:bg-indigo-500/15';
      summary.innerHTML =
        '<svg class="w-4 h-4 transition group-open:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg> Reveal answer';
      details.appendChild(summary);

      const answer = document.createElement('div');
      answer.className = 'mt-3 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-sm';
      answer.innerHTML = `<p class="text-emerald-400 font-display font-semibold mb-2">✓ Correct: ${LETTERS[correctIndex]}</p><p class="text-slate-400 leading-relaxed">${item.explanation}</p>`;
      details.appendChild(answer);

      card.appendChild(details);
      container.appendChild(card);
    });
  });
}

function initMobileNav() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('mobile-nav');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = !nav.classList.contains('hidden');
    if (isOpen) {
      closeMobileNav();
    } else {
      nav.classList.remove('hidden');
      iconOpen?.classList.add('hidden');
      iconClose?.classList.remove('hidden');
    }
  });
}

function closeMobileNav() {
  const nav = document.getElementById('mobile-nav');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');
  nav?.classList.add('hidden');
  iconOpen?.classList.remove('hidden');
  iconClose?.classList.add('hidden');
}

function initActiveSection() {
  const links = document.querySelectorAll('.toc-link');
  const sections = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach((link) => {
            const active = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('active', active);
            link.classList.toggle('text-slate-400', !active);
            const num = link.querySelector('.toc-num');
            if (num) {
              num.classList.toggle('bg-indigo-500/30', active);
              num.classList.toggle('text-indigo-200', active);
              num.classList.toggle('bg-slate-800', !active);
              num.classList.toggle('text-slate-500', !active);
            }
          });
        }
      });
    },
    { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  const sidebarBar = document.getElementById('sidebar-progress');
  const label = document.getElementById('progress-label');

  const update = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(100, Math.round((scrollTop / docHeight) * 100)) : 0;

    if (bar) bar.style.transform = `scaleX(${pct / 100})`;
    if (sidebarBar) sidebarBar.style.width = `${pct}%`;
    if (label) label.textContent = String(pct);
  };

  window.addEventListener('scroll', update, { passive: true });
  update();
}

function initRevealSections() {
  const sections = document.querySelectorAll('.reveal-section');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );
  sections.forEach((el) => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  buildToc();
  renderQuizzes();
  initMobileNav();
  initActiveSection();
  initScrollProgress();
  initRevealSections();
});
