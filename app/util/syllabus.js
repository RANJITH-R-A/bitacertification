export const coursesyllabus = [
    {
      code: "PCEP",
      slug: "pceptrainingcourse",
      syllabustopic: [
        {
          module: "Module 1: Computer Programming and Python Fundamentals (18%)",
          moduledes: [
            {
              topicheding: "Understand fundamental terms and definitions",
              topicdes: [
                "interpreting and the interpreter, compilation and the compiler",
                "lexis, syntax, and semantics"
              ]
            },
            {
              topicheding: "Understand Python’s logic and structure",
              topicdes: [
                "keywords",
                "instructions",
                "indentation",
                "comments"
              ]
            },
            {
              topicheding: "Introduce literals and variables into code and use different numeral systems",
              topicdes: [
                "Boolean, integers, floating-point numbers",
                "scientific notation",
                "strings",
                "binary, octal, decimal, and hexadecimal numeral systems",
                "variables",
                "naming conventions",
                "implementing PEP-8 recommendations"
              ]
            },
            {
              topicheding: "Choose operators and data types adequate to the problem",
              topicdes: [
                "numeric operators: ** * / % // + –",
                "string operators: * +",
                "assignment and shortcut operators",
                "unary and binary operators",
                "priorities and binding",
                "bitwise operators: ~ & ^ | << >>",
                "Boolean operators: not, and, or",
                "Boolean expressions",
                "relational operators ( == != > >= < <= )",
                "the accuracy of floating-point numbers",
                "type casting"
              ]
            },
            {
              topicheding: "Perform Input/Output console operations",
              topicdes: [
                "the print() and input() functions",
                "the sep= and end= keyword parameters",
                "the int() and float() functions"
              ]
            }
          ]
        },
        {
          module: "Module 2: Control Flow – Conditional Blocks and Loops (29%)",
          moduledes: [
            {
              topicheding: "Make decisions and branch the flow with the if instruction",
              topicdes: [
                "conditional statements: if, if-else, if-elif, if-elif-else",
                "multiple conditional statements",
                "nesting conditional statements"
              ]
            },
            {
              topicheding: "Perform different types of iterations",
              topicdes: [
                "the pass instruction",
                "building loops with while, for, range(), and in",
                "iterating through sequences",
                "expanding loops with while-else and for-else",
                "nesting loops and conditional statements",
                "controlling loop execution with break and continue"
              ]
            }
          ]
        },
        {
          module: "Module 3: Data Collections – Tuples, Dictionaries, Lists, and Strings (25%)",
          moduledes: [
            {
              topicheding: "Collect and process data using lists",
              topicdes: [
                "constructing vectors",
                "indexing and slicing",
                "the len() function",
                "list methods: append(), insert(), index(), etc.",
                "functions: len(), sorted()",
                "the del instruction",
                "iterating through lists with the for loop",
                "initializing loops",
                "the in and not in operators",
                "list comprehensions",
                "copying and cloning",
                "lists in lists: matrices and cubes"
              ]
            },
            {
              topicheding: "Collect and process data using tuples",
              topicdes: [
                "tuples: indexing, slicing, building, immutability",
                "tuples vs. lists: similarities and differences",
                "lists inside tuples and tuples inside lists"
              ]
            },
            {
              topicheding: "Collect and process data using dictionaries",
              topicdes: [
                "dictionaries: building, indexing, adding and removing keys",
                "iterating through dictionaries and their keys and values",
                "checking the existence of keys",
                "methods: keys(), items(), and values()"
              ]
            },
            {
              topicheding: "Operate with strings",
              topicdes: [
                "constructing strings",
                "indexing, slicing, immutability",
                "escaping using the  character",
                "quotes and apostrophes inside strings",
                "multi-line strings",
                "basic string functions and methods"
              ]
            }
          ]
        },
        {
          module: "Module 4: Functions and Exceptions (28%)",
          moduledes: [
            {
              topicheding: "Decompose the code using functions",
              topicdes: [
                "defining and invoking user-defined functions and generators",
                "the return keyword, returning results",
                "the None keyword",
                "recursion"
              ]
            },
            {
              topicheding: "Organize interaction between the function and its environment",
              topicdes: [
                "parameters vs. arguments",
                "positional, keyword, and mixed argument passing",
                "default parameter values",
                "name scopes, name hiding (shadowing), and the global keyword"
              ]
            },
            {
              topicheding: "Python Built-In Exceptions Hierarchy",
              topicdes: [
                "BaseException",
                "Exception",
                "SystemExit",
                "KeyboardInterrupt",
                "abstract exceptions",
                "ArithmeticError",
                "LookupError",
                "IndexError",
                "KeyError",
                "TypeError",
                "ValueError"
              ]
            },
            {
              topicheding: "Basics of Python Exception Handling",
              topicdes: [
                "try-except / the try-except Exception",
                "ordering the except branches",
                "propagating exceptions through function boundaries",
                "delegating responsibility for handling exceptions"
              ]
            }
          ]
        }
      ]
    },
    {
      code: "PCAP",
      slug: "pcappreparationcourse",
      syllabustopic: [
        {
          module: "Module 1: Modules and Packages (12%)",
          moduledes: [
            {
              topicheding: "Import and use modules and packages",
              topicdes: [
                "import variants: import, from import, import as, import *",
                "advanced qualifying for nested modules",
                "the dir() function",
                "the sys.path variable"
              ]
            },
            {
              topicheding: "Perform evaluations using the math module",
              topicdes: [
                "functions: ceil(), floor(), trunc(), factorial(), hypot(), sqrt()"
              ]
            },
            {
              topicheding: "Generate random values using the random module",
              topicdes: [
                "functions: random(), seed(), choice(), sample()"
              ]
            },
            {
              topicheding: "Discover host platform properties using the platform module",
              topicdes: [
                "functions: platform(), machine(), processor(), system(), version(), python_implementation(), python_version_tuple()"
              ]
            },
            {
              topicheding: "Create and use user-defined modules and packages",
              topicdes: [
                "idea and rationale",
                "the __pycache__ directory",
                "the __name__ variable",
                "public and private variables",
                "the __init__.py file",
                "searching for/through modules/packages",
                "nested packages vs. directory trees"
              ]
            }
          ]
        },
        {
          module: "Module 2: Exception (14%)",
          moduledes: [
            {
              topicheding: " Handle errors using Python-defined exceptions",
              topicdes: [
                "except, except:-except, except:-else:, except (e1, e2)",
                "the hierarchy of exceptions",
                "raise, raise ex",
                "assert",
                "event classes",
                "except E as e",
                "the arg property"
              ]
            },
            {
              topicheding: "Extend the Python exceptions hierarchy with self-defined exceptions",
              topicdes: [
                "self-defined exceptions",
                "defining and using self-defined exceptions"
              ]
            }
          ]
        },
        {
          module: "Module 3: Strings (18%)",
          moduledes: [
            {
              topicheding: "Understand machine representation of characters",
              topicdes: [
                "encoding standards: ASCII, UNICODE, UTF-8, code points, escape sequences"
              ]
            },
            {
              topicheding: "Operate on strings",
              topicdes: [
                "functions: ord(), chr()",
                "indexing, slicing, immutability",
                "iterating through strings, concatenating, multiplying, comparing (against strings and numbers)",
                "operators: in, not in"
              ]
            },
            {
              topicheding: "Employ built-in string methods",
              topicdes: [
                "methods: .isxxx(), .join(), .split(), .sort(), sorted(), .index(), .find(), .rfind()"
              ]
            }
          ]
        },
        {
          module: "Module 4: Object Oriented Programming (34%)",
          moduledes: [
            {
              topicheding: "Understand the Object-Oriented approach",
              topicdes: [
                "ideas and notions: class, object, property, method, encapsulation, inheritance, superclass, subclass, identifying class components"
              ]
            },
            {
              topicheding: "Employ class and object properties",
              topicdes: [
                "instance vs. class variables: declarations and initializations",
                "the __dict__ property (objects vs. classes)",
                "private components (instances vs. classes)",
                "name mangling"
              ]
            },
            {
              topicheding: "Equip a class with methods",
              topicdes: [
                "declaring and using methods",
                "the self parameter"
              ]
            },
            {
              topicheding: "Discover the class structure",
              topicdes: [
                "introspection and the hasattr() function (objects vs classes)",
                "properties: __name__, __module__ , __bases__"
              ]
            },
            {
              topicheding: "Build a class hierarchy using inheritance",
              topicdes: [
                "single and multiple inheritance",
                "the isinstance() function",
                "overriding",
                "operators: not is, is",
                "polymorphism",
                "overriding the __str__() method",
                "diamonds"
              ]
            },
            {
              topicheding: "Construct and initialize objects",
              topicdes: [
                "declaring and invoking constructors"
              ]
            }
          ]
        },
        {
          module: "Module 5: Miscellaneous (22%)",
          moduledes: [
            {
              topicheding: "Build complex lists using list comprehension",
              topicdes: [
                "list comprehensions: the if operator, nested comprehensions"
              ]
            },
            {
              topicheding: "Embed lambda functions into the code",
              topicdes: [
                "lambdas: defining and using lambdas",
                "self-defined functions taking lambdas as arguments",
                "functions: map(), filter()"
              ]
            },
            {
              topicheding: "Define and use closures",
              topicdes: [
                "closures: meaning and rationale",
                "defining and using closures"
              ]
            },
            {
              topicheding: "Understand basic Input/Output terminology",
              topicdes: [
                "I/O modes",
                "predefined streams",
                "handles vs. streams",
                "text vs. binary modes"
              ]
            },
            {
              topicheding: "Perform Input/Output operations",
              topicdes: [
                "the open() function",
                "the errno variable and its values",
                "functions: close(), .read(), .write(), .readline(), readlines()",
                "using bytearray as input/output buffer"
              ]
            }
          ]
        }
      ]
    },
    {
      code: "PCPP1",
      slug: "pcpp1training",
      syllabustopic: [
        {
          module: "Module 1: Advanced Object Oriented Programming (25%)",
          moduledes: [
            {
              topicheding: "Understand and explain the basic terms and programming concepts used in the OOP paradigm",
              topicdes: [
                "essential terminology: class, instance, object, attribute, method, type, instance and class variables, superclasses and subclasses",
                "reflexion: isinstance(), issubclass()",
                "the __init__() method",
                "creating classes, methods, and class and instance variables; calling methods; accessing class and instance variables"
              ]
            },
            {
              topicheding: "Perform Python core syntax operations",
              topicdes: [
                "Python core syntax expressions – magic methods: comparison methods (e.g. __eq__(self, other)), numeric methods (e.g. __abs__(self)), type conversion methods (e.g. __init__(self)), object intro- and retrospection (e.g. __str__(self), __instancecheck__(self, object)), object attribute access (e.g. __getattr__(self, attribute)), accessing containers (e.g. __getitem__(self, key))",
                "operating with special methods",
                "extending class implementations to support additional core syntax operations"
              ]
            },
            {
              topicheding: "Understand and use the concepts of inheritance, polymorphism, and composition",
              topicdes: [
                "class hierarchies",
                "single vs. multiple inheritance",
                "Method Resolution Order (MRO)",
                "duck typing",
                "inheritance vs. composition",
                "modelling real-life problems using the 'is a' and 'has a' relations"
              ]
            },
            {
              topicheding: "Understand the concept of extended function argument syntax and demonstrate proficiency in using decorators",
              topicdes: [
                "special identifiers: *args, **kwargs",
                "forwarding arguments to other functions",
                "function parameter handling",
                "closures",
                "function and class decorators",
                "decorating functions with classes",
                "creating decorators and operating with them: implementing decorator patterns, decorator arguments, wrappers",
                "decorator stacking",
                "syntactic sugar",
                "special methods: __call__, __init__"
              ]
            },
            {
              topicheding: "Design, build, and use Python static and class methods",
              topicdes: [
                "implementing class and static methods",
                "class vs. static methods",
                "the cls parameter",
                "the @classmethod and @staticmethod decorators",
                "class methods: accessing and modifying the state/methods of a class, creating objects"
              ]
            },
            {
              topicheding: "Understand and use Python abstract classes and methods",
              topicdes: [
                "abstract classes and abstract methods: defining, creating, and implementing abstract classes and abstract methods",
                "overriding abstract methods",
                "implementing a multiple inheritance from abstract classes",
                "delivering multiple child classes"
              ]
            },
            {
              topicheding: "Understand and use the concept of attribute encapsulation",
              topicdes: [
                "definition, meaning, usage",
                "operating with the getter, setter, and deleter methods"
              ]
            },
            {
              topicheding: "Understand and apply the concept of subclassing built-in classes",
              topicdes: [
                "inheriting properties from built-in classes",
                "using the concept of subclassing the built-ins to extend class features and modify class methods and attributes"
              ]
            },
            {
              topicheding: "Demonstrate proficiency in the advanced techniques for creating and serving exceptions",
              topicdes: [
                "exceptions as objects, named attributes of exception objects, basic terms and concepts",
                "chained exceptions, the __context__ and __cause__ attributes, implicitly and explicitly chained exceptions",
                "analyzing exception traceback objects, the __traceback__ attribute",
                "operating with different kinds of exceptions"
              ]
            },
            {
              topicheding: "Demonstrate proficiency in performing shallow and deep copy operations",
              topicdes: [
                "shallow and deep copies of objects",
                "object: label vs. identity vs. value",
                "the id() function and the is operand",
                "operating with the copy() and deepcopy() methods"
              ]
            },
            {
              topicheding: "Understand and perform (de)serialization of Python objects",
              topicdes: [
                "object persistence, serialization and deserialization: meaning, purpose, usage",
                "serializing objects as a single byte stream: the pickle module, pickling various data types",
                "the dumps() and loads functions",
                "serializing objects by implementing a serialization dictionary: the shelve module, file modes, creating shelve objects"
              ]
            },
            {
              topicheding: "Understand and explain the concept of metaprogramming",
              topicdes: [
                "metaclasses: meaning, purpose, usage",
                "the type metaclass and the type() function",
                "special attributes: __name__, __class__, __bases__, __dict__",
                "operating with metaclasses, class variables, and class methods"
              ]
            }
          ]
        },
        {
          module: "Module 2: Coding conversion and standardization (12%)",
          moduledes: [
            {
              topicheding: "Understand and explain the concept of Python Enhancement Proposals and Python philosophy",
              topicdes: [
                "the PEP concept and selected PEPs: PEP 1, PEP 8, PEP 20, PEP 257",
                "PEP 1: different types of PEPs, formats, purpose, guidelines",
                "PEP 20: Python philosophy, its guiding principles, and design; the import this instruction and PEP 20 aphorisms"
              ]
            },
            {
              topicheding: "Employ the PEP 8 guidelines, coding conventions, and best practices",
              topicdes: [
                "PEP 8 compliant checkers",
                "recommendations for code layout: indentation, continuation lines, maximum line length, line breaks, blank lines (vertical whitespaces)",
                "default encodings",
                "module imports",
                "recommendations for string quotes, whitespace, and trailing commas: single-quoted vs. double-quoted strings, whitespace in expressions and statements, whitespace and trailing commas",
                "recommendations for using comments: block comments, inline comments",
                "documentation strings",
                "naming conventions: naming styles, recommendations",
                "programming recommendations"
              ]
            },
            {
              topicheding: "Employ the PEP 257 guidelines, conventions, and best practices",
              topicdes: [
                "docstrings: rationale, usage",
                "comments vs. docstrings",
                "PEP 484 and type hints",
                "creating, using, and accessing docstrings",
                "one-line vs. multi-line docstrings",
                "documentation standards, linters, fixers"
              ]
            }
          ]
        },
        {
          module: "Module 3: GUI Programming (20%)",
          moduledes: [
            {
              topicheding: "Understand and explain the basic concepts and terminology related to GUI programming",
              topicdes: [
                "GUI: meaning, rationale, basic terms and definitions",
                "visual programming: examples, basic features",
                "widgets/controls – basic terms: windows, title and title bars, buttons, icons, labels, etc.",
                "classical vs. event-driven programming",
                "events – basic terms",
                "widget toolkits/GUI toolkits"
              ]
            },
            {
              topicheding: "Use GUI toolkits, basic blocks, and conventions to design and build simple GUI applications",
              topicdes: [
                "importing tkinter components",
                "creating an application's main window: the Tk(), mainloop(), and title methods",
                "adding widgets to the window: buttons, labels, frames, the place() method, widget constructors, location, screen coordinates, size, etc.",
                "launching the event controller: event handlers, defining and using callbacks, the destroy() method, dialog boxes",
                "shaping the main window and interacting with the user",
                "checking the validity of user input and handling errors",
                "working with Canvas and its methods",
                "using the Entry, Radiobutton, and Button widgets",
                "managing widgets with the grid and place managers",
                "binding events using the bind() method"
              ]
            },
            {
              topicheding: "Demonstrate proficiency in using widgets and handling events",
              topicdes: [
                "settling widgets in the window's interior, geometry managers",
                "coloring widgets, color modes: RGB, HEX",
                "event handling: writing event handlers and assigning them to widgets",
                "event-driven programming: implementing interfaces using events and callbacks",
                "widget properties and methods",
                "variables: observable variables and adding observers to variables",
                "using selected clickable and non-clickable widgets",
                "identifying and servicing GUI events"
              ]
            }
          ]
        },
        {
          module: "Module 4: Network Programming (18%)",
          moduledes: [
            {
              topicheding: "Understand and explain the basic concepts of network programming",
              topicdes: [
                "REST",
                "network sockets",
                "Domains, addresses, ports, protocols, and services",
                "Network communication: connection-oriented vs. connectionless communication, clients and servers"
              ]
            },
            {
              topicheding: "Demonstrate proficiency in working with sockets in Python",
              topicdes: [
                "the socket module: importing and creating sockets",
                "connecting sockets to HTTP servers, closing connections with servers",
                "sending requests to servers, the send() method",
                "receiving responses from servers, the recv() method",
                "exception handling mechanisms and exception types"
              ]
            },
            {
              topicheding: "Employ data transfer mechanisms for network communication",
              topicdes: [
                "JSON: syntax, structure, data types (numbers, strings, Boolean values, null), compound data (arrays and objects), sample JSON documents and their anatomies",
                "the json module: serialization and deserialization, serializing Python data/deserializing JSON (the dumps() and loads methods), serializng and deserializing Python objects",
                "XML: syntax, structure, sample xml documents and their anatomies, DTD, XML as a tree",
                "processing xml files"
              ]
            },
            {
              topicheding: "Design, develop, and improve a simple REST client",
              topicdes: [
                "the request module",
                "designing, building, and using testing environments",
                "HTTP methods: GET, POST, PUT, DELETE",
                "CRUD",
                "adding and updating data",
                "fetching and removing data from servers",
                "analyzing the server's response",
                "response status codes"
              ]
            }
          ]
        },
        {
          module: "Module 5: File Processing and communication with program’s environment - (15%)",
          moduledes: [
            {
              topicheding: "Demonstrate proficiency in database programming in Python",
              topicdes: [
                "the sqlite module",
                "creating and closing database connection using the connect and close methods",
                "creating tables",
                "inserting, reading, updating, and deleting data",
                "transaction demarcation",
                "cursor methods: execute, executemany, fetchone, fetchall",
                "creating basic SQL statements (SELECT, INSERT INTO, UPDATE, DELETE, etc.)"
              ]
            },
            {
              topicheding: "Demonstrate proficiency in processing different file formats in Python",
              topicdes: [
                "parsing XML documents",
                "searching data in XML documents using the find and findall methods",
                "building XML documents using the Element class and the SubElement function",
                "reading and writing CSV data using functions and classes: reader, writer, DictReader, DictWriter",
                "logging events in applications",
                "working with different levels of logging",
                "using LogRecord attributes to create log formats",
                "creating custom handlers and formatters",
                "parsing and creating configuration files using the ConfigParser object",
                "interpolating values in .ini files"
              ]
            }
          ]
        }
      ]
    },
    {
      code: "PCED",
      slug: "pcedcertificationpreparation",
      syllabustopic: [
        {
          module: "Module 1: Data Acquisition and Pre- Processing - 33%",
          moduledes: [
            {
              topicheding: "Data Collection, Integration, and Storage",
              topicdes: [
                "Objective 1.1.1 – Understand different data collection methods and their roles in decision-making and research.",
                "Objective 1.1.2 – Explain the data gathering process and various data sources.",
                "Objective 1.1.3 – Aggregate data from multiple sources and integrate them into datasets.",
                "Objective 1.1.4 – Explain various data storage solutions."
              ]
            },
            {
              topicheding: "Data Cleaning and Standardization",
              topicdes: [
                "Objective 1.2.1 – Understand structured and unstructured data and their implications in data analysis.",
                "Objective 1.2.2 – Identify, rectify, or remove erroneous data.",
                "Objective 1.2.3 – Understand data normalization and scaling.",
                "Objective 1.2.4 – Apply data cleaning and standardization techniques."
              ]
            },
            {
              topicheding: "Data Validation and Integrity",
              topicdes: [
                "Objective 1.3.1 – Execute and understand basic data validation methods.",
                "Objective 1.3.2 – Establish and maintain data integrity through clear validation rules."
              ]
            },
            {
              topicheding: "Data Preparation Techniques",
              topicdes: [
                "Objective 1.4.1 – Understand File Formats in Data Acquisition.",
                "Objective 1.4.2 – Access, manage, and effectively utilize datasets.",
                "Objective 1.4.3 – Extract data from various sources.",
                "Objective 1.4.4 – Enhance data readability and format in spreadsheets.",
                "Objective 1.4.5 – Prepare, adapt, and pre-process data for analysis."
              ]
            }
          ]
        },
        {
          module: "Module 2: Programing Skills (29%)",
          moduledes: [
            {
              topicheding: "Python Proficiency",
              topicdes: [
                "Objective 2.1.1 – Apply Python syntax and control structures to solve data-related problems.",
                "Objective 2.1.2 – Analyze and create Python functions.",
                "Objective 2.1.3 – Evaluate and navigate the Python Data Science ecosystem.",
                "Objective 2.1.4 – Organize and manipulate data using Python's core data structures.",
                "Objective 2.1.5 – Explain and implement Python scripting best practices."
              ]
            },
            {
              topicheding: "Module Management and Exception Handling",
              topicdes: [
                "Objective 2.2.1 – Import modules and manage Python packages using PIP.",
                "Objective 2.2.2 – Apply basic exception handling and maintain script robustness."
              ]
            },
            {
              topicheding: "SQL for Data Analysts",
              topicdes: [
                "Objective 2.3.1 – Perform SQL queries to retrieve and manipulate data.",
                "Objective 2.3.2 – Execute fundamental SQL commands to create, read, update, and delete data in database tables.",
                "Objective 2.3.3 – Establish connections to databases using Python.",
                "Objective 2.3.4 – Execute parameterized SQL queries through Python to safely interact with databases.",
                "Objective 2.3.5 – Understand, manage and convert SQL data types appropriately within Python scripts.",
                "Objective 2.3.6 – Understand essential database security concepts, including strategies to prevent SQL query injection."
              ]
            }
          ]
        },
        {
          module: "Module 3: Statistics and Analysis (9%)",
          moduledes: [
            {
              topicheding: "Descriptive Statistics",
              topicdes: [
                "Objective 3.1.1 – Understand and apply statistical measures in data analysis.",
                "Objective 3.1.2 – Analyze and evaluate data relationships."
              ]
            },
            {
              topicheding: "Inferential Statistics",
              topicdes: [
                "Objective 3.2.1 – Understand and apply bootstrapping for sampling distributions.",
                "Objective 3.2.2 – Explain when and how to use linear and logistic regression."
              ]
            }
          ]
        },
        {
          module: "Module 4: Data Analysis and Modeling - 16%",
          moduledes: [
            {
              topicheding: "Data Analysis with Pandas and NumPy",
              topicdes: [
                "Objective 4.1.1 – Manage data effectively with Pandas.",
                "Objective 4.1.2 – Understand and Utilize the Relationship Between DataFrame and Series in Pandas.",
                "Objective 4.1.3 – Perform Array Operations and Differentiate Data Structures with NumPy.",
                "Objective 4.1.4 – Apply and Analyze Data Organization Techniques in Pandas and NumPy."
              ]
            },
            {
              topicheding: "Statistical Methods and Machine Learning",
              topicdes: [
                "Objective 4.2.1 – Apply Python's descriptive statistics for dataset analysis.",
                "Objective 4.2.2 – Recognize the importance of test datasets in model evaluation.",
                "Objective 4.2.3 – Analyze and Evaluate Supervised Learning Algorithms and Model Accuracy."
              ]
            }
          ]
        },
        {
          module: "Module 5: Data Communication and Visualization - 13%",
          moduledes: [
            {
              topicheding: "Data Visualization Techniques",
              topicdes: [
                "Objective 5.1.1 – Demonstrate essential proficiency in data visualization with Matplotlib and Seaborn.",
                "Objective 5.1.2 – Assess the pros and cons of different data representations.",
                "Objective 5.1.3 – Label, annotate, and test insights from data visualizations.",
                "Objective 5.1.4 – Improve the clarity and accuracy of data interpretation by managing display features such as colors, labels and legends."
              ]
            },
            {
              topicheding: "Effective Communication of Data Insights",
              topicdes: [
                "Objective 5.2.1 – Tailor communication to different audience needs, and combine visualizations and text for clear data presentation.",
                "Objective 5.2.2 – Summarize key findings and support claims with evidence and reasoning."
              ]
            }
          ]
        }
      ]
    },
    {
      code: "SC-200",
      slug: "microsoftsecurityoperationsanalystcertification",
      syllabustopic: [
        {
          module: "Module 1: Manage a security operations environment (25–30%)",
          moduledes: [
            {
              topicheding: "Configure settings in Microsoft Defender XDR",
              topicdes: [
                "Configure a connection from Defender XDR to a Sentinel workspace",
                "Configure alert and vulnerability notification rules",
                "Configure Microsoft Defender for Endpoint advanced features",
                "Configure endpoint rules settings, including indicators and web content filtering",
                "Manage automated investigation and response capabilities in Microsoft Defender XDR",
                "Configure automatic attack disruption in Microsoft Defender XDR"
              ]
            },
            {
              topicheding: "Manage assets and environments",
              topicdes: [
                "Configure and manage device groups, permissions, and automation levels in Microsoft Defender for Endpoint",
                "Identify and remediate unmanaged devices in Microsoft Defender for Endpoint",
                "Manage resources by using Azure Arc",
                "Connect environments to Microsoft Defender for Cloud (by using multi-cloud account management)",
                "Discover and remediate unprotected resources by using Defender for Cloud",
                "Identify and remediate devices at risk by using Microsoft Defender Vulnerability Management"
              ]
            },
            {
              topicheding: "Design and configure a Microsoft Sentinel workspace",
              topicdes: [
                "Plan a Microsoft Sentinel workspace",
                "Configure Microsoft Sentinel roles",
                "Specify Azure RBAC roles for Microsoft Sentinel configuration",
                "Design and configure Microsoft Sentinel data storage, including log types and log retention",
                "Manage multiple workspaces by using Workspace manager and Azure Lighthouse"
              ]
            },
            {
              topicheding: "Ingest data sources in Microsoft Sentinel",
              topicdes: [
                "Identify data sources to be ingested for Microsoft Sentinel",
                "Implement and use Content hub solutions",
                "Configure and use Microsoft connectors for Azure resources, including Azure Policy and diagnostic settings",
                "Configure bidirectional synchronization between Microsoft Sentinel and Microsoft Defender XDR",
                "Plan and configure Syslog and Common Event Format (CEF) event collections",
                "Plan and configure collection of Windows Security events by using data collection rules, including Windows Event Forwarding (WEF)",
                "Configure threat intelligence connectors, including platform, TAXII, upload indicators API, and MISP",
                "Create custom log tables in the workspace to store ingested data"
              ]
            }
          ]
        },
        {
          module: "Module 2: Configure protections and detections (15–20%)",
          moduledes: [
            {
              topicheding: "Configure protections in Microsoft Defender security technologies",
              topicdes: [
                "Configure policies for Microsoft Defender for Cloud Apps",
                "Configure policies for Microsoft Defender for Office",
                "Configure security policies for Microsoft Defender for Endpoints, including attack surface reduction (ASR) rules",
                "Configure cloud workload protections in Microsoft Defender for Cloud"
              ]
            },
            {
              topicheding: "Configure detection in Microsoft Defender XDR",
              topicdes: [
                "Configure and manage custom detections",
                "Configure alert tuning",
                "Configure deception rules in Microsoft Defender XDR"
              ]
            },
            {
              topicheding: "Configure detections in Microsoft Sentinel",
              topicdes: [
                "Classify and analyze data by using entities",
                "Configure scheduled query rules, including KQL",
                "Configure near-real-time (NRT) query rules, including KQL",
                "Manage analytics rules from Content hub",
                "Configure anomaly detection analytics rules",
                "Configure the Fusion rule",
                "Query Microsoft Sentinel data by using ASIM parsers",
                "Manage and use threat indicators"
              ]
            }
          ]
        },
        {
          module: "Module 3: Manage incident response (35–40%)",
          moduledes: [
            {
              topicheding: "Respond to alerts and incidents in Microsoft Defender XDR",
              topicdes: [
                "Investigate and remediate threats to Microsoft Teams, SharePoint Online, and OneDrive",
                "Investigate and remediate threats in email by using Microsoft Defender for Office",
                "Investigate and remediate ransomware and business email compromise incidents identified by automatic attack disruption",
                "Investigate and remediate compromised entities identified by Microsoft Purview data loss prevention (DLP) policies",
                "Investigate and remediate threats identified by Microsoft Purview insider risk policies",
                "Investigate and remediate alerts and incidents identified by Microsoft Defender for Cloud",
                "Investigate and remediate security risks identified by Microsoft Defender for Cloud Apps",
                "Investigate and remediate compromised identities in Microsoft Entra ID",
                "Investigate and remediate security alerts from Microsoft Defender for Identity",
                "Manage actions and submissions in the Microsoft Defender portal"
              ]
            },
            {
              topicheding: "Respond to alerts and incidents identified by Microsoft Defender for Endpoint",
              topicdes: [
                "Investigate timeline of compromised devices",
                "Perform actions on the device, including live response and collecting investigation packages",
                "Perform evidence and entity investigation"
              ]
            },
            {
              topicheding: "Enrich investigations by using other Microsoft tools",
              topicdes: [
                "Investigate threats by using unified audit Log",
                "Investigate threats by using Content Search",
                "Perform threat hunting by using Microsoft Graph activity logs"
              ]
            },
            {
              topicheding: "Manage incidents in Microsoft Sentinel",
              topicdes: [
                "Triage incidents in Microsoft Sentinel",
                "Investigate incidents in Microsoft Sentinel",
                "Respond to incidents in Microsoft Sentinel"
              ]
            },
            {
              topicheding: "Configure security orchestration, automation, and response (SOAR) in Microsoft Sentinel",
              topicdes: [
                "Create and configure automation rules",
                "Create and configure Microsoft Sentinel playbooks",
                "Configure analytic rules to trigger automation",
                "Trigger playbooks manually from alerts and incidents",
                "Run playbooks on On-premises resources"
              ]
            }
          ]
        },
        {
          module: "Module 4: Perform threat hunting (15–20%)",
          moduledes: [
            {
              topicheding: "Hunt for threats by using KQL",
              topicdes: [
                "Identify threats by using Kusto Query Language (KQL)",
                "Interpret threat analytics in the Microsoft Defender portal",
                "Create custom hunting queries by using KQL"
              ]
            },
            {
              topicheding: "Hunt for threats by using Microsoft Sentinel",
              topicdes: [
                "Analyze attack vector coverage by using the MITRE ATT&CK in Microsoft Sentinel",
                "Customize content gallery hunting queries",
                "Use hunting bookmarks for data investigations",
                "Monitor hunting queries by using Livestream",
                "Retrieve and manage archived log data",
                "Create and manage search jobs"
              ]
            },
            {
              topicheding: "Analyze and interpret data by using workbooks",
              topicdes: [
                "Activate and customize Microsoft Sentinel workbook templates",
                "Create custom workbooks that include KQL",
                "Configure visualizations"
              ]
            }
          ]
        }
      ]
    },
    {
      code: "SC-200",
      slug: "microsoftsecurityoperationsanalystcertification",
      syllabustopic: [
        {
          module: "Module 1: Implement and manage user identities (20–25%)",
          moduledes: [
            {
              topicheding: "Configure and manage a Microsoft Entra tenant",
              topicdes: [
                "Configure and manage built-in and custom Microsoft Entra roles",
                "Recommend when to use administrative units",
                "Configure and manage administrative units",
                "Evaluate effective permissions for Microsoft Entra roles",
                "Configure and manage custom domains",
                "Configure Company branding settings",
                "Configure tenant properties, user settings, group settings, and device settings"
              ]
            },
            {
              topicheding: "Create, configure, and manage Microsoft Entra identities",
              topicdes: [
                "Create, configure, and manage users",
                "Create, configure, and manage groups",
                "Manage custom security attributes",
                "Automate the management of users and groups by using PowerShell",
                "Assign, modify, and report on licenses"
              ]
            },{
              topicheding: "Implement and manage identities for external users and tenants",
              topicdes: [
                "Manage External collaboration settings in Microsoft Entra ID",
                "Invite external users, individually or in bulk",
                "Manage external user accounts in Microsoft Entra ID",
                "Implement Cross-tenant access settings",
                "Implement and manage cross-tenant synchronization",
                "Configure identity providers, including SAML and WS-Fed",
                "Create and manage a Microsoft Entra B2C tenant (Microsoft Entra External ID)"
              ]
            },{
              topicheding: "Implement and manage hybrid identity",
              topicdes: [
                "Implement and manage Microsoft Entra Connect",
                "Implement and manage Microsoft Entra Connect cloud sync",
                "Implement and manage password hash synchronization",
                "Implement and manage pass-through authentication",
                "Implement and manage seamless single sign-on (SSO)",
                "Implement and manage federation, excluding manual Active Directory Federation Services (AD FS) deployments",
                "Implement and manage Microsoft Entra Connect Health",
                "Troubleshoot synchronization errors"
              ]
            }
          ]
        },
        {
          module: "Module 2: Implement authentication and access management (25–30%)",
          moduledes: [
            {
              topicheding: "Plan, implement, and manage Microsoft Entra user authentication",
              topicdes: [
                "Plan for authentication",
                "Implement and manage authentication methods",
                "Implement and manage tenant-wide Multi-factor Authentication (MFA) settings",
                "Manage per-user MFA settings",
                "Configure and deploy self-service password reset (SSPR)",
                "Implement and manage Windows Hello for Business",
                "Disable accounts and revoke user sessions",
                "Implement and manage password protection and smart lockout",
                "Enable Microsoft Entra Kerberos authentication for hybrid identities",
                "Implement certificate-based authentication in Microsoft Entra"
              ]
            },{
              topicheding: "Plan, implement, and manage Microsoft Entra Conditional Access",
              topicdes: [
                "Plan Conditional Access policies",
                "Implement Conditional Access policy assignments",
                "Implement Conditional Access policy controls",
                "Test and troubleshoot Conditional Access policies",
                "Implement session management",
                "Implement device-enforced restrictions",
                "Implement continuous access evaluation",
                "Create a Conditional Access policy from a template"
              ]
            },{
              topicheding: "Manage risk by using Microsoft Entra ID Protection",
              topicdes: [
                "Implement and manage user risk policies",
                "Implement and manage sign-in risk policies",
                "Implement and manage MFA registration policies",
                "Monitor, investigate and remediate risky users",
                "Monitor, investigate, and remediate risky workload identities"
              ]
            },{
              topicheding: "Implement access management for Azure resources by using Azure roles",
              topicdes: [
                "Create custom Azure roles, including both control plane and data plane permissions",
                "Assign built-in and custom Azure roles",
                "Evaluate effective permissions for a set of Azure roles",
                "Assign Azure roles to enable Microsoft Entra ID login to Azure virtual machines",
                "Configure Azure Key Vault role-based access control (RBAC) and access policies"
              ]
            }
          ]
        },
        {
          module: "Module 3: Plan and implement workload identities (20–25%)",
          moduledes: [
            {
              topicheding: "Plan and implement identities for applications and Azure workloads",
              topicdes: [
                "Select appropriate identities for applications and Azure workloads, including managed identities, service principals, user accounts, and managed service accounts",
                "Create managed identities",
                "Assign a managed identity to an Azure resource",
                "Use a managed identity assigned to an Azure resource to access other Azure resources"
              ]
            },{
              topicheding: "Plan, implement, and monitor the integration of enterprise applications",
              topicdes: [
                "Configure and manage user and admin consent",
                "Discover apps by using AD FS application activity reports",
                "Plan and implement settings for enterprise applications, including application-level and tenant-level settings",
                "Assign appropriate Microsoft Entra roles to users to manage enterprise applications",
                "Monitor and audit activity in enterprise applications",
                "Design and implement integration for on-premises apps by using Microsoft Entra Application Proxy",
                "Design and implement integration for software as a service (SaaS) apps",
                "Assign, classify, and manage users, groups, and app roles for enterprise applications",
                "Create and manage application collections"
              ]
            },{
              topicheding: "Plan and implement app registrations",
              topicdes: [
                "Plan for app registrations",
                "Create app registrations",
                "Configure app authentication",
                "Configure API permissions",
                "Create app roles"
              ]
            },{
              topicheding: "Manage and monitor app access by using Microsoft Defender for Cloud Apps",
              topicdes: [
                "Configure and analyze cloud discovery results by using Defender for Cloud Apps",
                "Configure connected apps",
                "Implement application-enforced restrictions",
                "Configure Conditional Access app control",
                "Create access and session policies in Defender for Cloud Apps",
                "Implement and manage policies for OAuth apps",
                "Manage the Cloud app catalog"
              ]
            }
          ]
        },
        {
          module: "Module 4: Plan and implement identity governance (20–25%)",
          moduledes: [
            {
              topicheding: "Plan and implement entitlement management in Microsoft Entra",
              topicdes: [
                "Plan entitlements",
                "Create and configure catalogs",
                "Create and configure access packages",
                "Manage access requests",
                "Implement and manage terms of use (ToU)",
                "Manage the lifecycle of external users",
                "Configure and manage connected organizations"
              ]
            },{
              topicheding: "Plan, implement, and manage access reviews in Microsoft Entra",
              topicdes: [
                "Plan for access reviews",
                "Create and configure access reviews",
                "Monitor access review activity",
                "Manually respond to access review activity"
              ]
            },{
              topicheding: "Plan and implement privileged access",
              topicdes: [
                "Plan and manage Azure roles in Microsoft Entra Privileged Identity Management (PIM), including settings and assignments",
                "Plan and manage Azure resources in PIM, including settings and assignments",
                "Plan and configure privileged access groups",
                "Manage the PIM request and approval process",
                "Analyze PIM audit history and reports",
                "Create and manage break-glass accounts"
              ]
            },{
              topicheding: "Monitor identity activity by using logs, workbooks, and reports",
              topicdes: [
                "Design a strategy for monitoring Microsoft Entra",
                "Review and analyze sign-in, audit, and provisioning logs by using the Microsoft Entra admin center",
                "Configure diagnostic settings, including configuring destinations such as Log Analytics workspaces, storage accounts, and event hubs",
                "Monitor Microsoft Entra by using KQL queries in Log Analytics",
                "Analyze Microsoft Entra by using workbooks and reporting",
                "Monitor and improve the security posture by using Identity Secure Score"
              ]
            },{
              topicheding: "Plan and implement Microsoft Entra Permissions Management",
              topicdes: [
                "Onboard Azure subscriptions to Permissions Management",
                "Evaluate and remediate risks relating to Azure identities, resources, and tasks",
                "Evaluate and remediate risks relating to Azure highly privileged roles",
                "Evaluate and remediate risks relating to Permissions Creep Index (PCI) in Azure",
                "Configure activity alerts and triggers for Azure subscriptions"
              ]
            }
          ]
        }
      ]
    },
    {
      code: "AZ-104",
      slug: "microsoftazureadministratortrainingcourse",
      syllabustopic: [
        {
          module: "Module 1: Manage Azure identities and governance (20–25%)",
          moduledes: [
            {
              topicheding: "Manage Microsoft Entra users and groups",
              topicdes: [
                "Create users and groups",
                "Manage user and group properties",
                "Manage licenses in Microsoft Entra ID",
                "Manage external users",
                "Configure self-service password reset (SSPR)"
              ]
            },
            {
              topicheding: "Manage access to Azure resources",
              topicdes: [
                "Manage built-in Azure roles",
                "Assign roles at different scopes",
                "Interpret access assignments"
              ]
            },{
              topicheding: "Manage Azure subscriptions and governance",
              topicdes: [
                "Implement and manage Azure Policy",
                "Configure resource locks",
                "Apply and manage tags on resources",
                "Manage resource groups",
                "Manage subscriptions",
                "Manage costs by using alerts, budgets, and Azure Advisor recommendations",
                "Configure management groups"
              ]
            }
          ]
        },
        {
          module: "Module 2: Implement and manage storage (15–20%)",
          moduledes: [
            {
              topicheding: "Configure access to storage",
              topicdes: [
                "Configure Azure Storage firewalls and virtual networks",
                "Create and use shared access signature (SAS) tokens",
                "Configure stored access policies",
                "Manage access keys",
                "Configure identity-based access for Azure Files"
              ]
            },{
              topicheding: "Configure and manage storage accounts",
              topicdes: [
                "Create and configure storage accounts",
                "Configure Azure Storage redundancy",
                "Configure object replication",
                "Configure storage account encryption",
                "Manage data by using Azure Storage Explorer and AzCopy"
              ]
            },{
              topicheding: "Configure Azure Files and Azure Blob Storage",
              topicdes: [
                "Create and configure a file share in Azure Storage",
                "Create and configure a container in Blob Storage",
                "Configure storage tiers",
                "Configure snapshots and soft delete for Azure Files",
                "Configure blob lifecycle management",
                "Configure blob versioning"
              ]
            }
          ]
        },
        {
          module: "Module 3: Deploy and manage Azure compute resources (20–25%)",
          moduledes: [
            {
              topicheding: "Automate deployment of resources by using Azure Resource Manager (ARM) templates or Bicep files",
              topicdes: [
                "Interpret an Azure Resource Manager template or a Bicep file",
                "Modify an existing Azure Resource Manager template",
                "Modify an existing Bicep file",
                "Deploy resources by using an Azure Resource Manager template or a Bicep file",
                "Export a deployment as an Azure Resource Manager template or convert an Azure Resource Manager template to a Bicep file"
              ]
            },{
              topicheding: "Create and configure virtual machines",
              topicdes: [
                "Create a virtual machine",
                "Configure Azure Disk Encryption",
                "Move a virtual machine to another resource group, subscription, or region",
                "Manage virtual machine sizes",
                "Manage virtual machine disks",
                "Deploy virtual machines to availability zones and availability sets",
                "Deploy and configure an Azure Virtual Machine Scale Sets"
              ]
            },{
              topicheding: "Provision and manage containers in the Azure portal",
              topicdes: [
                "Create and manage an Azure container registry",
                "Provision a container by using Azure Container Instances",
                "Provision a container by using Azure Container Apps",
                "Manage sizing and scaling for containers, including Azure Container Instances and Azure Container Apps"
              ]
            },{
              topicheding: "Create and configure Azure App Service",
              topicdes: [
                "Provision an App Service plan",
                "Configure scaling for an App Service plan",
                "Create an App Service",
                "Configure certificates and Transport Layer Security (TLS) for an App Service",
                "Map an existing custom DNS name to an App Service",
                "Configure backup for an App Service",
                "Configure networking settings for an App Service",
                "Configure deployment slots for an App Service"
              ]
            }
          ]
        },
        {
          module: "Module 4: Implement and manage virtual networking (15–20%)",
          moduledes: [
            {
              topicheding: "Configure and manage virtual networks in Azure",
              topicdes: [
                "Create and configure virtual networks and subnets",
                "Create and configure virtual network peering",
                "Configure public IP addresses",
                "Configure user-defined network routes",
                "Troubleshoot network connectivity"
              ]
            },{
              topicheding: "Configure secure access to virtual networks",
              topicdes: [
                "Create and configure network security groups (NSGs) and application security groups",
                "Evaluate effective security rules in NSGs",
                "Implement Azure Bastion",
                "Configure service endpoints for Azure platform as a service (PaaS)",
                "Configure private endpoints for Azure PaaS"
              ]
            },{
              topicheding: "Configure name resolution and load balancing",
              topicdes: [
                "Configure Azure DNS",
                "Configure an internal or public load balancer",
                "Troubleshoot load balancing"
              ]
            }
          ]
        },
        {
          module: "Module 5: Monitor and maintain Azure resources (10–15%)",
          moduledes: [
            {
              topicheding: "Monitor resources in Azure",
              topicdes: [
                "Interpret metrics in Azure Monitor",
                "Configure log settings in Azure Monitor",
                "Query and analyze logs in Azure Monitor",
                "Set up alert rules, action groups, and alert processing rules in Azure Monitor",
                "Configure and interpret monitoring of virtual machines, storage accounts, and networks by using Azure Monitor Insights",
                "Use Azure Network Watcher and Connection Monitor"
              ]
            },{
              topicheding: "Implement backup and recovery",
              topicdes: [
                "Create a Recovery Services vault",
                "Create an Azure Backup vault",
                "Create and configure a backup policy",
                "Perform backup and restore operations by using Azure Backup",
                "Configure Azure Site Recovery for Azure resources",
                "Perform a failover to a secondary region by using Site Recovery",
                "Configure and interpret reports and alerts for backups"
              ]
            }
          ]
        }
      ]
    },
    {
      code: "AZ-204",
      slug: "az204trainingcourses",
      syllabustopic: [
        {
          module: "Module 1: Develop Azure compute solutions (25–30%)",
          moduledes: [
            {
              topicheding: "Implement containerized solutions",
              topicdes: [
                "Create and manage container images for solutions",
                "Publish an image to Azure Container Registry",
                "Run containers by using Azure Container Instance",
                "Create solutions by using Azure Container Apps"
              ]
            },
            {
              topicheding: "Implement Azure App Service Web Apps",
              topicdes: [
                "Create an Azure App Service Web App",
                "Enable diagnostics logging",
                "Deploy code to a web app",
                "Configure web app settings including Transport Layer Security (TLS), API settings, and connection strings",
                "Implement autoscaling"
              ]
            },{
              topicheding: "Implement Azure Functions",
              topicdes: [
                "Create and configure an Azure Functions app",
                "Implement input and output bindings",
                "Implement function triggers by using data operations, timers, and webhooks"
              ]
            }
          ]
        },
        {
          module: "Module 2: Develop for Azure storage (15–20%)",
          moduledes: [
            {
              topicheding: "Develop solutions that use Azure Cosmos DB",
              topicdes: [
                "Perform operations on containers and items by using the SDK",
                "Set the appropriate consistency level for operations",
                "Implement change feed notifications"
              ]
            },{
              topicheding: "Develop solutions that use Azure Blob Storage",
              topicdes: [
                "Set and retrieve properties and metadata",
                "Perform operations on data by using the appropriate SDK",
                "Implement storage policies and data lifecycle management",
                "Implement static website hosting"
              ]
            }
          ]
        },
        {
          module: "Module 3: Implement Azure security (20–25%)",
          moduledes: [
            {
              topicheding: "",
              topicdes: [
                "Authenticate and authorize users by using the Microsoft Identity platform",
                "Authenticate and authorize users and apps by using Microsoft Entra ID",
                "Create and implement shared access signatures",
                "Implement solutions that interact with Microsoft Graph"
              ]
            },{
              topicheding: "",
              topicdes: [
                "Secure app configuration data by using App Configuration or Azure Key Vault",
                "Develop code that uses keys, secrets, and certificates stored in Azure Key Vault",
                "Implement Managed Identities for Azure resources"
              ]
            }
          ]
        },
        {
          module: "Module 4: Monitor, troubleshoot, and optimize Azure solutions (15–20%)",
          moduledes: [
            {
              topicheding: "Implement caching for solutions",
              topicdes: [
                "Configure cache and expiration policies for Azure Cache for Redis",
                "Implement secure and optimized application cache patterns including data sizing, connections, encryption, and expiration",
                "Implement Azure Content Delivery Network endpoints and profiles"
              ]
            },{
              topicheding: "Troubleshoot solutions by using Application Insights",
              topicdes: [
                "Configure an app or service to use Application Insights",
                "Monitor and analyze metrics, logs, and traces",
                "Implement Application Insights web tests and alerts"
              ]
            }
          ]
        },
        {
          module: "Module 5: Connect to and consume Azure services and third-party services (15–20%)",
          moduledes: [
            {
              topicheding: "Implement API Management",
              topicdes: [
                "Create an Azure API Management instance",
                "Create and document APIs",
                "Configure access to APIs",
                "Implement policies for APIs"
              ]
            },
            {
              topicheding: "Develop event-based solutions",
              topicdes: [
                "Implement solutions that use Azure Event Grid",
                "Implement solutions that use Azure Event Hub"
              ]
            },{
              topicheding: "Develop message-based solutions",
              topicdes: [
                "Implement solutions that use Azure Service Bus",
                "Implement solutions that use Azure Queue Storage queues"
              ]
            }
          ]
        }
      ]
    },
    {
      code: "AZ-500",
      slug: "microsoftazuresecuritytechnologiescourse",
      syllabustopic: [
        {
          module: "Module 1: Manage identity and access (25–30%)",
          moduledes: [
            {
              topicheding: "Manage Microsoft Entra identities",
              topicdes: [
                "Secure Microsoft Entra users",
                "Secure Microsoft Entra groups",
                "Recommend when to use external identities",
                "Secure external identities",
                "Implement Microsoft Entra ID Protection"
              ]
            },
            {
              topicheding: "Manage Microsoft Entra authentication",
              topicdes: [
                "Implement multi-factor authentication (MFA)",
                "Configure Microsoft Entra Verified ID",
                "Implement passwordless authentication",
                "Implement password protection",
                "Implement single sign-on (SSO)",
                "ntegrate single sign on (SSO) and identity providers",
                "Recommend and enforce modern authentication protocols"
              ]
            },{
              topicheding: "Manage Microsoft Entra authorization",
              topicdes: [
              "Configure Azure role permissions for management groups, subscriptions, resource groups, and resources",
              "Assign Microsoft Entra built-in roles",
              "Assign Azure built-in roles",
              "Create and assign custom roles, including Azure roles and Microsoft Entra roles",
              "Implement and manage Microsoft Entra Permissions Management",
              "Configure Microsoft Entra Privileged Identity Management",
              "Configure role management and access reviews in Microsoft Entra",
              "Implement Conditional Access policies"
              ]
            },{
              topicheding: "Manage Microsoft Entra application access",
              topicdes: [
                "Manage access to enterprise applications in Microsoft Entra ID, including OAuth permission grants",
                "Manage Microsoft Entra app registrations",
                "Configure app registration permission scopes",
                "Manage app registration permission consent",
                "Manage and use service principals",
                "Manage managed identities for Azure resources",
                "Recommend when to use and configure an Microsoft Entra Application Proxy, including authentication"
              ]
            }
          ]
        },
        {
          module: "Module 2: Secure networking (20–25%)",
          moduledes: [
            {
              topicheding: "Plan and implement security for virtual networks",
              topicdes: [
                "Plan and implement Network Security Groups (NSGs) and Application Security Groups (ASGs)",
                "Plan and implement user-defined routes (UDRs)",
                "Plan and implement Virtual Network peering or VPN gateway",
                "Plan and implement Virtual WAN, including secured virtual hub",
                "Secure VPN connectivity, including point-to-site and site-to-site",
                "Implement encryption over ExpressRoute",
                "Configure firewall settings on PaaS resources",
                "Monitor network security by using Network Watcher, including NSG flow logging"
              ]
            },{
              topicheding: "Plan and implement security for private access to Azure resources",
              topicdes: [
                "Plan and implement virtual network Service Endpoints",
                "Plan and implement Private Endpoints",
                "Plan and implement Private Link services",
                "Plan and implement network integration for Azure App Service and Azure Functions",
                "Plan and implement network security configurations for an App Service Environment (ASE)",
                "Plan and implement network security configurations for an Azure SQL Managed Instance"
              ]
            },{
              topicheding: "Plan and implement security for public access to Azure resources",
              topicdes: [
                "Plan and implement Transport Layer Security (TLS) to applications, including Azure App Service and API Management",
                "Plan, implement, and manage an Azure Firewall, including Azure Firewall Manager and firewall policies",
                "Plan and implement an Azure Application Gateway",
                "Plan and implement an Azure Front Door, including Content Delivery Network (CDN)",
                "Plan and implement a Web Application Firewall (WAF)",
                "Recommend when to use Azure DDoS Protection Standard"
              ]
            }
          ]
        },
        {
          module: "Module 3: Secure compute, storage, and databases (20–25%)",
          moduledes: [
            {
              topicheding: "Plan and implement advanced security for compute",
              topicdes: [
                "Plan and implement remote access to public endpoints, including Azure Bastion and just-in-time (JIT) virtual machine (VM) access",
                "Configure network isolation for Azure Kubernetes Service (AKS)",
                "Secure and monitor AKS",
                "Configure authentication for AKS",
                "Configure security monitoring for Azure Container Instances (ACIs)",
                "Configure security monitoring for Azure Container Apps (ACAs)",
                "Manage access to Azure Container Registry (ACR)",
                "Configure disk encryption, including Azure Disk Encryption (ADE), encryption at host, and confidential disk encryption",
                "Recommend security configurations for Azure API Management"
              ]
            },{
              topicheding: "Plan and implement security for storage",
              topicdes: [
                "Configure access control for storage accounts",
                "Manage life cycle for storage account access keys",
                "Select and configure an appropriate method for access to Azure Files",
                "Select and configure an appropriate method for access to Azure Blob Storage",
                "Select and configure an appropriate method for access to Azure Tables",
                "Select and configure an appropriate method for access to Azure Queues",
                "Select and configure appropriate methods for protecting against data security threats, including soft delete, backups, versioning, and immutable storage",
                "Configure Bring your own key (BYOK)",
                "Enable double encryption at the Azure Storage infrastructure level"
              ]
            },{
              topicheding: "Plan and implement security for Azure SQL Database and Azure SQL Managed Instance",
              topicdes: [
                "Enable Microsoft Entra database authentication",
                "Enable database auditing",
                "Identify use cases for the Microsoft Purview governance portal",
                "Implement data classification of sensitive information by using the Microsoft Purview governance portal",
                "Plan and implement dynamic masking",
                "Implement Transparent Data Encryption (TDE)",
                "Recommend when to use Azure SQL Database Always Encrypted"
              ]
            }
          ]
        },
        {
          module: "Module 4: Manage security operations (25–30%)",
          moduledes: [
            {
              topicheding: "Plan, implement, and manage governance for security",
              topicdes: [
                "Create, assign, and interpret security policies and initiatives in Azure Policy",
                "Configure security settings by using Azure Blueprints",
                "Deploy secure infrastructures by using a landing zone",
                "Create and configure an Azure Key Vault",
                "Recommend when to use a dedicated Hardware Security Module (HSM)",
                "Configure access to Key Vault, including vault access policies and Azure Role Based Access Control",
                "Manage certificates, secrets, and keys",
                "Configure key rotation",
                "Configure backup and recovery of certificates, secrets, and keys",
              ]
            },{
              topicheding: "Manage security posture by using Microsoft Defender for Cloud",
              topicdes: [
                "Identify and remediate security risks by using the Microsoft Defender for Cloud Secure Score and Inventory",
                "Assess compliance against security frameworks and Microsoft Defender for Cloud",
                "Add industry and regulatory standards to Microsoft Defender for Cloud",
                "Add custom initiatives to Microsoft Defender for Cloud",
                "Connect hybrid cloud and multi-cloud environments to Microsoft Defender for Cloud",
                "Identify and monitor external assets by using Microsoft Defender External Attack Surface Management"
              ]
            },{
              topicheding: "Configure and manage threat protection by using Microsoft Defender for Cloud",
              topicdes: [
                "Enable workload protection services in Microsoft Defender for Cloud, including Microsoft Defender for Storage, Databases, Containers, App Service, Key Vault, and Resource Manager",
                "Configure Microsoft Defender for Servers",
                "Configure Microsoft Defender for Azure SQL Database",
                "Manage and respond to security alerts in Microsoft Defender for Cloud",
                "Configure workflow automation by using Microsoft Defender for Cloud",
                "Evaluate vulnerability scans from Microsoft Defender for Server"
              ]
            },{
              topicheding: "Configure and manage security monitoring and automation solutions",
              topicdes: [
                "Monitor security events by using Azure Monitor",
                "Configure data connectors in Microsoft Sentinel",
                "Create and customize analytics rules in Microsoft Sentinel",
                "Evaluate alerts and incidents in Microsoft Sentinel",
                "Evaluate alerts and incidents in Microsoft Sentinel",
                "Configure automation in Microsoft Sentinel"
              ]
            }
          ]
        }
      ]
    },
    {
      code: "AZ-305",
      slug: "az305trainingcourse",
      syllabustopic: [
        {
          module: "Module 1: Design identity, governance, and monitoring solutions (25–30%)",
          moduledes: [
            {
              topicheding: "Design solutions for logging and monitoring",
              topicdes: [
                "Recommend a logging solution",
                "Recommend a solution for routing logs",
                "Recommend a monitoring solution"
              ]
            },{
              topicheding: "Design authentication and authorization solutions",
              topicdes: [
                "Recommend an authentication solution",
                "Recommend an identity management solution",
                "Recommend a solution for authorizing access to Azure resources",
                "Recommend a solution to manage secrets, certificates, and keys"
              ]
            },{
              topicheding: "Design governance",
              topicdes: [
                "Recommend a structure for management groups, subscriptions, and resource groups, and a strategy for resource tagging",
                "Recommend a solution for managing compliance",
                "Recommend a solution for identity governance"
              ]
            }
          ]
        },
        {
          module: "Module 2: Design data storage solutions (20–25%)",
          moduledes: [
            {
              topicheding: "Design data storage solutions for relational data",
              topicdes: [
                "Recommend a solution for storing relational data",
                "Recommend a database service tier and compute tier",
                "Recommend a solution for database scalability",
                "Recommend a solution for data protection"
              ]
            },{
              topicheding: "Design data storage solutions for semi-structured and unstructured data",
              topicdes: [
                "Recommend a solution for storing semi-structured data",
                "Recommend a solution for storing unstructured data",
                "Recommend a data storage solution to balance features, performance, and costs",
                "Recommend a data solution for protection and durability"
              ]
            },{
              topicheding: "Design data integration",
              topicdes: [
                "Recommend a solution for data integration",
                "Recommend a solution for data analysis"
              ]
            }
          ]
        },
        {
          module: "Module 3: Design business continuity solutions (15–20%)",
          moduledes: [
            {
              topicheding: "Design solutions for backup and disaster recovery",
              topicdes: [
                "Recommend a recovery solution for Azure and hybrid workloads that meets recovery objectives",
                "Recommend a backup and recovery solution for compute",
                "Recommend a backup and recovery solution for databases",
                "Recommend a backup and recovery solution for unstructured data"
              ]
            },{
              topicheding: "Design for high availability",
              topicdes: [
                "Recommend a high availability solution for compute",
                "Recommend a high availability solution for relational data",
                "Recommend a high availability solution for semi-structured and unstructured data"
              ]
            }
          ]
        },
        {
          module: "Module 4: Design infrastructure solutions (30–35%)",
          moduledes: [
            {
              topicheding: "Design compute solutions",
              topicdes: [
                "Specify components of a compute solution based on workload requirements",
                "Recommend a virtual machine-based solution",
                "Recommend a container-based solution",
                "Recommend a serverless-based solution",
                "Recommend a compute solution for batch processing"
              ]
            },{
              topicheding: "Design an application architecture",
              topicdes: [
                "Recommend a messaging architecture",
                "Recommend an event-driven architecture",
                "Recommend a solution for API integration",
                "Recommend a caching solution for applications",
                "Recommend an application configuration management solution",
                "Recommend an automated deployment solution for applications"
              ]
            },{
              topicheding: "",
              topicdes: [
                "Evaluate a migration solution that leverages the Microsoft Cloud Adoption Framework for Azure",
                "Evaluate on-premises servers, data, and applications for migration",
                "Recommend a solution for migrating workloads to infrastructure as a service (IaaS) and platform as a service (PaaS)",
                "Recommend a solution for migrating databases",
                "Recommend a solution for migrating unstructured data"
              ]
            },{
              topicheding: "Design network solutions",
              topicdes: [
                "Recommend a connectivity solution that connects Azure resources to the internet",
                "Recommend a connectivity solution that connects Azure resources to on-premises networks",
                "Recommend a solution to optimize network performance",
                "Recommend a solution to optimize network security",
                "Recommend a load-balancing and routing solution"
              ]
            }
          ]
        }
      ]
    },
    {
      code: "AZ-400",
      slug: "az400trainingonline",
      syllabustopic: [
        {
          module: "Module 1: Design and implement processes and communications (10–15%)",
          moduledes: [
            {
              topicheding: "Design and implement traceability and flow of work",
              topicdes: [
                "Design and implement a structure for the flow of work, including GitHub Flow",
                "Design and implement a strategy for feedback cycles, including notifications and issues",
                "Design and implement integration for tracking work, including GitHub projects, Azure Boards, and repositories",
                "Design and implement source, bug, and quality traceability"
              ]
            },
            {
              topicheding: "Design and implement appropriate metrics and queries for DevOps",
              topicdes: [
                "Design and implement a dashboard, including flow of work, such as cycle times, time to recovery, and lead time",
                "Design and implement appropriate metrics and queries for project planning",
                "Design and implement appropriate metrics and queries for development",
                "Design and implement appropriate metrics and queries for testing",
                "Design and implement appropriate metrics and queries for security",
                "Design and implement appropriate metrics and queries for delivery",
                "Design and implement appropriate metrics and queries for operations"
              ]
            },{
              topicheding: "Configure collaboration and communication",
              topicdes: [
                "Document a project by configuring wikis and process diagrams, including Markdown and Mermaid syntax",
                "Configure release documentation, including release notes and API documentation",
                "Automate creation of documentation from Git history",
                "Configure integration by using webhooks",
                "Configure integration between GitHub or Azure DevOps and Microsoft Teams"
              ]
            }
          ]
        },
        {
          module: "Module 2: Design and implement a source control strategy (10–15%)",
          moduledes: [
            {
              topicheding: "Design and implement branching strategies for the source code",
              topicdes: [
                "Design a branch strategy, including trunk-based, feature branch, and release branch",
                "Design and implement a pull request workflow by using branch policies and branch protections",
                "Implement branch merging restrictions by using branch policies and branch protections"
              ]
            },{
              topicheding: "Configure and manage repositories",
              topicdes: [
                "Design and implement a strategy for managing large files, including Git Large File Storage (LFS) and git-fat",
                "Design a strategy for scaling and optimizing a Git repository, including Scalar and cross-repository sharing",
                "Configure permissions in the source control repository",
                "Configure tags to organize the source control repository",
                "Recover specific data by using Git commands",
                "Remove specific data from source control"
              ]
            }
          ]
        },
        {
          module: "Module 3: Design and implement build and release pipelines (50–55%)",
          moduledes: [
            {
              topicheding: "Design and implement a package management strategy",
              topicdes: [
                "Recommend package management tools including GitHub Packages registry and Azure Artifacts",
                "Design and implement package feeds and views for local and upstream packages",
                "Design and implement a dependency versioning strategy for code assets and packages, including semantic versioning and date-based",
                "Design and implement a versioning strategy for pipeline artifacts"
              ]
            }, {
              topicheding: "Design and implement a testing strategy for pipelines",
              topicdes: [
                "Design and implement quality and release gates, including security and governance",
                "Design a comprehensive testing strategy, including local tests, unit tests, integration tests, and load tests",
                "Implement tests in a pipeline, including configuring test tasks, configuring test agents, and integration of test results",
                "Implement code coverage analysis"
              ]
            }, {
              topicheding: "Design and implement pipelines",
              topicdes: [
                "Select a deployment automation solution, including GitHub Actions and Azure Pipelines",
                "Design and implement a GitHub runner or Azure DevOps agent infrastructure, including cost, tool selection, licenses, connectivity, and maintainability",
                "Design and implement integration between GitHub repositories and Azure Pipelines",
                "Develop and implement pipeline trigger rules",
                "Develop pipelines by using YAML",
                "Design and implement a strategy for job execution order, including parallelism and multi-stage pipelines",
                "Develop and implement complex pipeline scenarios, such as hybrid pipelines, VM templates, and self-hosted runners or agents",
                "Create reusable pipeline elements, including YAML templates, task groups, variables, and variable groups",
                "Design and implement checks and approvals by using YAML environments"
              ]
            }, {
              topicheding: "Design and implement deployments",
              topicdes: [
                "Design a deployment strategy, including blue-green, canary, ring, progressive exposure, feature flags, and A/B testing",
                "Design a pipeline to ensure that dependency deployments are reliably ordered",
                "Plan for minimizing downtime during deployments by using virtual IP address (VIP) swap, load balancing, rolling deployments, and deployment slots",
                "Design a hotfix path plan for responding to high-priority code fixes",
                "Design and implement a resiliency strategy for deployment",
                "Implement feature flags by using Azure App Configuration Feature Manager",
                "Implement application deployment by using containers, binaries, and scripts",
                "Implement a deployment that includes database tasks"
              ]
            }, {
              topicheding: "Design and implement infrastructure as code (IaC)",
              topicdes: [
                "Recommend a configuration management technology for application infrastructure",
                "Implement a configuration management strategy for application infrastructure",
                "Define an IaC strategy, including source control and automation of testing and deployment",
                "Design and implement desired state configuration for environments, including Azure Automation State Configuration, Azure Resource Manager, Bicep, and Azure Automanage Machine Configuration",
                "Design and implement Azure Deployment Environments for on-demand self-deployment"
              ]
            }, {
              topicheding: "Maintain pipelines",
              topicdes: [
                "Monitor pipeline health, including failure rate, duration, and flaky tests",
                "Optimize a pipeline for cost, time, performance, and reliability",
                "Optimize pipeline concurrency for performance and cost",
                "Design and implement a retention strategy for pipeline artifacts and dependencies",
                "Migrate a pipeline from classic to YAML in Azure Pipelines"
              ]
            }
          ]
        },
        {
          module: "Module 4: Develop a security and compliance plan (10–15%)",
          moduledes: [
            {
              topicheding: "Design and implement authentication and authorization methods",
              topicdes: [
                "Choose between Service Principals and Managed Identity",
                "Implement and manage GitHub authentication, including GitHub Apps, GITHUB_TOKEN, and personal access tokens",
                "Implement and manage Azure DevOps service connections and personal access tokens",
                "Design and implement permissions and roles in GitHub",
                "Design and implement permissions and security groups in Azure DevOps",
                "Recommend appropriate access levels, including stakeholder access in Azure DevOps and outside collaborator access in GitHub",
                "Configure projects and teams in Azure DevOps"
              ]
            },{
              topicheding: "Design and implement a strategy for managing sensitive information in automation",
              topicdes: [
                "Implement and manage secrets, keys, and certificates by using Azure Key Vault",
                "Implement and manage secrets in GitHub Actions and Azure Pipelines",
                "Design and implement a strategy for managing sensitive files during deployment, including Azure Pipelines secure files",
                "Design pipelines to prevent leakage of sensitive information"
              ]
            },{
              topicheding: "Automate security and compliance scanning",
              topicdes: [
                "Design a strategy for security and compliance scanning, including dependency, code, secret, and licensing scanning",
                "Configure Microsoft Defender for Cloud DevOps Security",
                "Configure GitHub Advanced Security for both GitHub and Azure DevOps",
                "Integrate GitHub Advanced Security with Microsoft Defender for Cloud",
                "Automate container scanning, including scanning container images and configuring an action to run CodeQL analysis in a container",
                "Automate analysis of licensing, vulnerabilities, and versioning of open-source components by using Dependabot alerts"
              ]
            }
          ]
        },
        {
          module: "Module 5: Implement an instrumentation strategy (5–10%)",
          moduledes: [
            {
              topicheding: "Configure monitoring for a DevOps environment",
              topicdes: [
                "Configure Azure Monitor and Log Analytics to integrate with DevOps tools",
                "Configure collection of telemetry by using Application Insights, VM Insights, Container Insights, Storage Insights, and Network Insights",
                "Configure monitoring in GitHub, including enabling insights and creating and configuring charts",
                "Configure alerts for events in GitHub Actions and Azure Pipelines"
              ]
            },{
              topicheding: "Analyze metrics from instrumentation",
              topicdes: [
                "Inspect infrastructure performance indicators, including CPU, memory, disk, and network",
                "Analyze metrics by using collected telemetry, including usage and application performance",
                "Inspect distributed tracing by using Application Insights",
                "Interrogate logs using basic Kusto Query Language (KQL) queries"
              ]
            }
          ]
        }
      ]
    }, 
    {
      code: "SC-100",
      slug: "microsoftcybersecuritycourseforbeginners",
      syllabustopic: [
        {
          module: "Module 1: Design solutions that align with security best practices and priorities (20–25%)",
          moduledes: [
            {
              topicheding: "Design a resiliency strategy for ransomware and other attacks based on Microsoft Security Best Practices",
              topicdes: [
                "Design a security strategy to support business resiliency goals, including identifying and prioritizing threats to business-critical assets",
                "Design solutions that align with Microsoft ransomware best practices, including backup, restore, and privileged access",
                "Design configurations for secure backup and restore by using Azure Backup for hybrid and multicloud environments",
                "Design solutions for security updates"
              ]
            },
            {
              topicheding: "Design solutions that align with the Microsoft Cybersecurity Reference Architectures (MCRA) and Microsoft cloud security benchmark (MCSB)",
              topicdes: [
                "Design solutions that align with best practices for cybersecurity capabilities and controls",
                "Design solutions that align with best practices for protecting against insider and external attacks",
                "Design solutions that align with best practices for Zero Trust security, including the Zero Trust Rapid Modernization Plan (RaMP)"
              ]
            },{
              topicheding: "Design solutions that align with the Microsoft Cloud Adoption Framework for Azure and the Microsoft Azure Well-Architected Framework",
              topicdes: [
                "Design a new or evaluate an existing strategy for security and governance based on the Microsoft Cloud Adoption Framework (CAF) for Azure and the Microsoft Azure Well-Architected Framework",
                "Recommend solutions for security and governance based on the Microsoft Cloud Adoption Framework for Azure and the Microsoft Azure Well-Architected Framework",
                "Design solutions for implementing and governing security by using Azure landing zones",
                "Design a DevSecOps process"
              ]
            }
          ]
        },
        {
          module: "Module 2: Design security operations, identity, and compliance capabilities (30–35%)",
          moduledes: [
            {
              topicheding: "Design solutions for security operations",
              topicdes: [
                "Develop security operations capabilities to support a hybrid or multicloud environment",
                "Design a solution for centralized logging and auditing",
                "Design a solution for security information and event management (SIEM), including Microsoft Sentinel",
                "Design a solution for detection and response that includes extended detection and response (XDR)",
                "Design a solution for security orchestration automated response (SOAR), including Microsoft Sentinel and Microsoft Defender XDR",
                "Design and evaluate security workflows, including incident response, threat hunting, incident management, and threat intelligence",
                "Design and evaluate threat detection coverage by using MITRE ATT&CK"
              ]
            },{
              topicheding: "Design solutions for identity and access management",
              topicdes: [
                "Design a solution for access to software as a service (SaaS), platform as a service (PaaS), infrastructure as a service (IaaS), hybrid/on-premises, and multicloud resources, including identity, networking, and application controls",
                "Design a solution for Microsoft Entra ID, including hybrid and multi-cloud environments",
                "Design a solution for external identities, including business-to-business (B2B), business-to-customer (B2C), and decentralized identity",
                "Design a modern authentication and authorization strategy, including Conditional Access, continuous access evaluation, threat intelligence integration, and risk scoring",
                "Validate the alignment of Conditional Access policies with a Zero Trust strategy",
                "Specify requirements to secure Active Directory Domain Services (AD DS)",
                "Design a solution to manage secrets, keys, and certificates"
              ]
            },{
              topicheding: "Design solutions for securing privileged access",
              topicdes: [
                "Design a solution for assigning and delegating privileged roles by using the enterprise access model",
                "Design an identity governance solution, including Microsoft Entra Privileged Identity Management (PIM), privileged access management, entitlement management, and access reviews",
                "Design a solution for securing the administration of cloud tenants, including SaaS and multicloud infrastructure and platforms",
                "Design a solution for cloud infrastructure entitlement management that includes Microsoft Entra Permissions Management",
                "Design a solution for Privileged Access Workstation (PAW) and bastion services"
              ]
            },{
              topicheding: "Design solutions for regulatory compliance",
              topicdes: [
                "Translate compliance requirements into a security solution",
                "Design a solution to address compliance requirements by using Microsoft Purview risk and compliance solutions",
                "Design a solution to address privacy requirements, including Microsoft Priva",
                "Design Azure Policy solutions to address security and compliance requirements",
                "Evaluate infrastructure compliance by using Microsoft Defender for Cloud"
              ]
            }
          ]
        },
        {
          module: "Module 3: Design security solutions for infrastructure (20–25%)",
          moduledes: [
            {
              topicheding: "Design solutions for security posture management in hybrid and multicloud environments",
              topicdes: [
                "Evaluate security posture by using the Microsoft cloud security benchmark (MCSB)",
                "Evaluate security posture by using Microsoft Defender for Cloud",
                "Evaluate security posture by using Microsoft Secure Score",
                "Design integrated security posture management and workload protection solutions in hybrid and multi-cloud environments, including Microsoft Defender for Cloud",
                "Design cloud workload protection solutions that use Microsoft Defender for Cloud, such as Microsoft Defender for Servers, Microsoft Defender for App Service, and Microsoft Defender for SQL",
                "Design a solution for integrating hybrid and multicloud environments by using Azure Arc",
                "Design a solution for Microsoft Defender External Attack Surface Management (Defender EASM)"
              ]
            },{
              topicheding: "Design solutions for securing server and client endpoints",
              topicdes: [
                "Specify security requirements for servers, including multiple platforms and operating systems",
                "Specify security requirements for mobile devices and clients, including endpoint protection, hardening, and configuration",
                "Specify security requirements for IoT devices and embedded systems",
                "Design a solution for securing operational technology (OT) and industrial control systems (ICS) by using Microsoft Defender for IoT",
                "Specify security baselines for server and client endpoints",
                "Design a solution for secure remote access, including Microsoft Entra Global Secure Access"
              ]
            },{
              topicheding: "Specify requirements for securing SaaS, PaaS, and IaaS services",
              topicdes: [
                "Specify security baselines for SaaS, PaaS, and IaaS services",
                "Specify security requirements for IoT workloads",
                "Specify security requirements for web workloads, including Azure App Service",
                "Specify security requirements for containers",
                "Specify security requirements for container orchestration"
              ]
            }
          ]
        },
        {
          module: "Module 4: Design security solutions for applications and data (20–25%)",
          moduledes: [
            {
              topicheding: "Design solutions for securing Microsoft 365",
              topicdes: [
                "Evaluate security posture for productivity and collaboration workloads by using metrics, including Microsoft Secure Score and Microsoft Defender for Cloud secure score",
                "Design a Microsoft Defender XDR solution",
                "Design secure configurations and operational practices for Microsoft 365 workloads and data"
              ]
            },{
              topicheding: "Design solutions for securing applications",
              topicdes: [
                "Evaluate the security posture of existing application portfolios",
                "Evaluate threats to business-critical applications by using threat modeling",
                "Design and implement a full lifecycle strategy for application security",
                "Design and implement standards and practices for securing the application development process",
                "Map technologies to application security requirements",
                "Design a solution for workload identity to authenticate and access Azure cloud resources",
                "Design a solution for API management and security",
                "Design a solution for secure access to applications, including Azure Web Application Firewall (WAF) and Azure Front Door"
              ]
            },{
              topicheding: "Design solutions for securing an organization's data",
              topicdes: [
                "Design a solution for data discovery and classification by using Microsoft Purview data governance solutions",
                "Specify priorities for mitigating threats to data",
                "Design a solution for protection of data at rest, data in motion, and data in use",
                "Design a security solution for data in Azure workloads, including Azure SQL, Azure Synapse Analytics, and Azure Cosmos DB",
                "Design a security solution for data in Azure Storage",
                "Design a security solution that includes Microsoft Defender for Storage and Microsoft Defender for SQL"
              ]
            }
          ]
        }
      ]
    }, 
    {
      code: "MB-910",
      slug: "microsoftdynamics365traininginchennai",
      syllabustopic: [
        {
          module: "Module 1: Describe Dynamics 365 Customer Insights (15–20%)",
          moduledes: [
            {
              topicheding: "Explore Customer Insights - Journeys",
              topicdes: [
                "Describe use cases for Customer Insights - Journeys",
                "Describe lead generation and qualification",
                "Describe use cases for marketing forms",
                "Describe how to target customers by using segments",
                "Describe email marketing",
                "Describe customer journeys",
                "Describe event management features and capabilities",
                "Describe how to use Copilot with Customer Insights - Journeys"
              ]
            },
            {
              topicheding: "Describe Customer Insights - Data",
              topicdes: [
                "Describe use cases of and capabilities for Customer Insights – Data",
                "Describe unified customer profiles",
                "Describe measures, segments, and predictions"
              ]
            }
          ]
        },
        {
          module: "Module 2: Describe Dynamics 365 Sales (20–25%)",
          moduledes: [
            {
              topicheding: "Explore Sales",
              topicdes: [
                "Describe use cases for Sales",
                "Describe leads and the process for qualifying leads",
                "Describe the opportunity management process",
                "Describe the quote lifecycle",
                "Describe the order management and invoice management processes",
                "Describe use cases for guided selling including business process flows and assistant",
                "Describe the product catalog, prices list, and unit groups",
                "Describe Copilot in Sales",
                "Describe the Sales accelerator"
              ]
            },{
              topicheding: "Describe Sales capabilities and related apps",
              topicdes: [
                "Describe sales pipeline and forecasting concepts",
                "Describe use cases for and capabilities of Sales Insights features",
                "Describe use cases for and capabilities of LinkedIn Sales Insights",
                "Describe use cases for the Dynamics 365 Sales mobile app",
                "Describe Microsoft Copilot for Sales"
              ]
            }
          ]
        },
        {
          module: "Module 3: Describe Dynamics 365 Customer Service (20–25%)",
          moduledes: [
            {
              topicheding: "Explore Customer Service",
              topicdes: [
                "Describe use cases for Customer Service",
                "Describe the functionality for workload management, including cases, basic routing (basic queues), Unified Routing, and the inbox for agents",
                "Describe knowledge management in Customer Service",
                "Describe the case lifecycle including service-level agreements (SLAs) and entitlements",
                "Describe use cases for Copilot in Customer Service"
              ]
            },{
              topicheding: "Describe Customer Service capabilities and related apps",
              topicdes: [
                "Describe Omnichannel for Customer Service",
                "Describe reporting and data visualization options in Customer Service",
                "Describe use cases for agent productivity tools"
              ]
            }
          ]
        },
        {
          module: "Module 4: Describe Dynamics 365 Field Service (15–20%)",
          moduledes: [
            {
              topicheding: "Explore Field Service",
              topicdes: [
                "Describe use cases for Field Service",
                "Describe the work order lifecycle",
                "Describe inspections in Field Service",
                "Describe the Field Service mobile app",
                "Describe use cases of Copilot in Field Service"
              ]
            },{
              topicheding: "Describe capabilities related to Field Service",
              topicdes: [
                "Describe resource management and scheduling processes",
                "Describe asset management and customer assets",
                "Describe Connected Field Service for Dynamics 365"
              ]
            }
          ]
        },
        {
          module: "Module 5: Explore the core capabilities of customer engagement apps in Dynamics 365 (15–20%)",
          moduledes: [
            {
              topicheding: "Describe the foundations of customer engagement apps",
              topicdes: [
                "Describe customer engagement apps",
                "Describe Microsoft Power Platform as it relates to customer engagement apps",
                "Describe Microsoft Dataverse as the foundation for customer engagement apps",
                "Navigate to and within customer engagement apps",
                "Describe Copilot for Dynamics 365 apps"
              ]
            },{
              topicheding: "Describe shared activities and integration options in customer engagement apps",
              topicdes: [
                "Describe customers and activities",
                "Describe search options and filter criteria",
                "Describe reporting capabilities including dashboards, charts, and views",
                "Describe Microsoft Teams integration",
                "Describe Microsoft Outlook integration",
                "Describe Microsoft Excel and Word integration",
                "Describe Microsoft SharePoint integration"
              ]
            }
          ]
        }
      ]
    },
    {
      code: "MB-920",
      slug: "microsoftdynamics365trainingcourses",
      syllabustopic: [
        {
          module: "Module 1: Describe Dynamics 365 Supply Chain Management (20–25%)",
          moduledes: [
            {
              topicheding: "Describe Supply Chain Management core capabilities",
              topicdes: [
                "Describe Supply Chain Management capabilities and features",
                "Describe the order-to-cash process",
                "Describe the procure-to-pay process",
                "Describe products and released products",
                "Describe product master records, product variants, and product dimensions",
                "Describe pricing and discounts in relation to trade agreements",
                "Describe picking, packing, and reserving inventory"
              ]
            },
            {
              topicheding: "Describe manufacturing strategies",
              topicdes: [
                "Describe lean, discrete, and process manufacturing",
                "Describe bills of materials (BOMs), routes, and operations as they relate to production orders",
                "Describe shop floor management",
                "Describe master planning"
              ]
            },{
              topicheding: "Describe inventory and warehousing capabilities",
              topicdes: [
                "Describe costing methods",
                "Describe on-hand inventory capabilities",
                "Describe inventory reservations, picking and packing, replenishment, and shipments",
                "Describe use cases for Warehouse Management Systems (WMS)",
                "Describe use cases for Transportation Management Systems (TMS)"
              ]
            }
          ]
        },
        {
          module: "Module 2: Describe Dynamics 365 Finance (20–25%)",
          moduledes: [
            {
              topicheding: "Describe Finance core capabilities",
              topicdes: [
                "Describe Finance capabilities and features",
                "Describe organization and legal entities",
                "Describe tax capabilities"
              ]
            },{
              topicheding: "Describe general ledgers",
              topicdes: [
                "Describe charts of accounts including main accounts, balance sheets, and income statements",
                "Describe journaling concepts",
                "Describe financial dimensions and dimension sets concepts",
                "Describe periodic financial processes"
              ]
            },{
              topicheding: "Describe accounts payables and accounts receivables",
              topicdes: [
                "Describe core accounts payable components including vendors, purchase orders, and vendor invoices",
                "Describe vendor payments and settlements including three-way matching concepts",
                "Describe core accounts receivable components including customers, customer invoices, and free text invoices",
                "Describe credit and collection processes"
              ]
            },{
              topicheding: "Describe expense management, fixed asset management, and budgeting",
              topicdes: [
                "Describe cash and bank management concepts",
                "Describe expense management capabilities",
                "Describe fixed asset management capabilities",
                "Describe budgeting capabilities"
              ]
            }
          ]
        },
        {
          module: "Module 3: Describe Dynamics 365 Commerce (10–15%)",
          moduledes: [
            {
              topicheding: "Describe Commerce core capabilities",
              topicdes: [
                "Describe Commerce channels",
                "Describe channel management concepts",
                "Describe product hierarchies and assortments",
                "Describe retail pricing and discounts",
                "Describe e-commerce capabilities, including business-to-business (B2B) and business-to-customer (B2C)"
              ]
            },{
              topicheding: "Describe Commerce clienteling and Dynamics 365 Fraud Protection",
              topicdes: [
                "Describe customer loyalty concepts",
                "Describe how to create personalized customer using clienteling",
                "Describe how Fraud Protection reduces fraudulent activities"
              ]
            }
          ]
        },
        {
          module: "Module 4: Describe Dynamics 365 Human Resources (10–15%)",
          moduledes: [
            {
              topicheding: "Describe Human Resources core capabilities",
              topicdes: [
                "Describe workers and positions",
                "Describe the hire-to-retire process",
                "Describe leave and absence capabilities",
                "Identify integration options between Human Resources and LinkedIn",
                "Describe compensation and benefits capabilities"
              ]
            },{
              topicheding: "Describe personnel management capabilities",
              topicdes: [
                "Describe self-service capabilities",
                "Describe employee training and certification features",
                "Describe performance management capabilities"
              ]
            }
          ]
        },
        {
          module: "Module 5: Describe Dynamics 365 Project Operations (10–15%)",
          moduledes: [
            {
              topicheding: "Describe Project Operations capabilities",
              topicdes: [
                "Describe project-based services and project types",
                "Describe project sales capabilities",
                "Describe project contract capabilities",
                "Describe project pricing capabilities",
                "Describe the project lifecycle including project invoicing and revenue recognition"
              ]
            },{
              topicheding: "Describe project planning and management capabilities",
              topicdes: [
                "Describe project planning, scheduling, and resourcing capabilities",
                "Describe work breakdown structures (WBS)",
                "Describe project cost tracking capabilities including time and expense costs"
              ]
            }
          ]
        },
        {
          module: "Module 6: Describe the finance and operations core functionality (15–20%)",
          moduledes: [
            {
              topicheding: "Describe the finance and operations apps",
              topicdes: [
                "Describe enterprise resource planning (ERP)",
                "Describe finance and operations apps use cases",
                "Explore the finance and operations user interface"
              ]
            },{
              topicheding: "Describe reporting and integration capabilities in finance and operations apps",
              topicdes: [
                "Describe built-in reporting capabilities including workspaces",
                "Describe options for analyzing data by using Power BI",
                "Describe Microsoft Office 365 integration capabilities, including Microsoft Excel, SharePoint, and Teams",
                "Describe Microsoft Power Platform integration options",
                "Describe Business Events integration capabilities"
              ]
            }
          ]
        }
      ]
    },
    {
      code: "MB-102",
      slug: "microsoft365administratortraining",
      syllabustopic: [
        {
          module: "Module 1: Deploy and manage a Microsoft 365 tenant (25–30%)",
          moduledes: [
            {
              topicheding: "Implement and manage a Microsoft 365 tenant",
              topicdes: [
                "Create a tenant",
                "Implement and manage domains",
                "Configure organizational settings, including security, privacy, and profile",
                "Identify and respond to service health issues",
                "Configure notifications in service health",
                "Monitor adoption and usage"
              ]
            },{
              topicheding: "Manage users and groups",
              topicdes: [
                "Create and manage users",
                "Create and manage guest users",
                "Create and manage contacts",
                "Create and manage groups, including Microsoft 365 groups",
                "Manage and monitor Microsoft 365 license allocations",
                "Perform bulk user management, including PowerShell"
              ]
            },{
              topicheding: "Manage roles in Microsoft 365",
              topicdes: [
                "Manage roles in Microsoft 365 and Microsoft Entra",
                "Manage role groups for Microsoft Defender XDR, Microsoft Purview, and Microsoft 365 workloads",
                "Manage delegation by using administrative units",
                "Implement privileged identity management for Microsoft Entra roles"
              ]
            }
          ]
        },
        {
          module: "Module 2: Implement and manage Microsoft Entra identity and access (25–30%)",
          moduledes: [
            {
              topicheding: "Implement and manage identity synchronization with Microsoft Entra tenant",
              topicdes: [
                "Prepare for identity synchronization by using IdFix",
                "Implement and manage directory synchronization by using Microsoft Entra Connect cloud sync",
                "Implement and manage directory synchronization by using Microsoft Entra Connect",
                "Monitor synchronization by using Microsoft Entra Connect Health",
                "Troubleshoot synchronization, including Microsoft Entra Connect and Microsoft Entra Connect cloud sync"
              ]
            },{
              topicheding: "Implement and manage authentication",
              topicdes: [
                "Implement and manage authentication methods, including Windows Hello for Business, passwordless, tokens, and the Microsoft Authenticator app",
                "Implement and manage self-service password reset (SSPR)",
                "Implement and manage Microsoft Entra Password Protection",
                "Implement and manage multi-factor authentication (MFA)",
                "Investigate and resolve authentication issues"
              ]
            },{
              topicheding: "Implement and manage secure access",
              topicdes: [
                "Plan for identity protection",
                "Implement and manage Microsoft Entra ID Protection",
                "Plan Conditional Access policies",
                "Implement and manage Conditional Access policies"
              ]
            }
          ]
        },
        {
          module: "Module 3: Manage security and threats by using Microsoft Defender XDR (25–30%)",
          moduledes: [
            {
              topicheding: "Manage security reports and alerts by using the Microsoft Defender portal",
              topicdes: [
                "Review and take actions to improve the Microsoft Secure Score in the Microsoft Defender portal",
                "Review and respond to security incidents and alerts in Microsoft Defender XDR",
                "Review and respond to issues identified in security and compliance reports in Microsoft Defender XDR",
                "Review and respond to threats identified in threat analytics"
              ]
            },{
              topicheding: "Implement and manage email and collaboration protection by using Microsoft Defender for Office 365",
              topicdes: [
                "Implement policies and rules in Defender for Office 365",
                "Review and respond to threats identified in Defender for Office 365, including threats and investigations",
                "Create and run campaigns, such as attack simulation",
                "Unblock users"
              ]
            },{
              topicheding: "Implement and manage endpoint protection by using Microsoft Defender for Endpoint",
              topicdes: [
                "Onboard devices to Defender for Endpoint",
                "Configure Defender for Endpoint settings",
                "Review and respond to endpoint vulnerabilities",
                "Review and respond to risks identified in the Microsoft Defender Vulnerability Management dashboard"
              ]
            }
          ]
        },
        {
          module: "Module 4: Manage compliance by using Microsoft Purview (15–20%)",
          moduledes: [
            {
              topicheding: "Implement Microsoft Purview information protection and data lifecycle management",
              topicdes: [
                "Implement and manage sensitive info types by using keywords, keyword lists, or regular expressions",
                "Implement retention labels, retention label policies, and retention policies",
                "Implement sensitivity labels and sensitivity label policies"
              ]
            },{
              topicheding: "Implement Microsoft Purview data loss prevention (DLP)",
              topicdes: [
                "Implement DLP for workloads",
                "Implement Endpoint DLP",
                "Review and respond to DLP alerts, events, and reports"
              ]
            }
          ]
        }
      ]
    },
    {
      code: "MB-700",
      slug: "microsoftfinanceandoperationstraining",
      syllabustopic: [
        {
          module: "Module 1: Architect solutions (20–25%)",
          moduledes: [
            {
              topicheding: "Gather requirements",
              topicdes: [
                "Identify operational and organizational challenges that may affect a business",
                "Identify existing business processes and opportunities to optimize business processes",
                "Gather information about expected transaction volume",
                "Categorize business requirements and perform gap fit analyses",
                "Review and validate business requirements throughout the solution lifecycle"
              ]
            },
            {
              topicheding: "Define the solution architecture",
              topicdes: [
                "Map business requirements to functional components",
                "Evaluate whether to build versus buy for selected business requirements",
                "Identify opportunities to implement supplemental Microsoft technologies",
                "Use the appropriate implementation tools including Lifecycle Services (LCS) and Azure DevOps",
                "Describe the Success by Design framework",
                "Create solution architecture diagrams"
              ]
            },{
              topicheding: "Define and document the solution blueprint",
              topicdes: [
                "Define an organization including company information, locations, and structure",
                "Document the implementation timeline including roll-out strategies",
                "Define the business process catalog and document solution gaps",
                "Define instances, environments, and solution components",
                "Identify required security roles"
              ]
            }
          ]
        },
        {
          module: "Module 2: Define solution strategies (35–40%)",
          moduledes: [
            {
              topicheding: "Select a deployment strategy",
              topicdes: [
                "Develop a process to manage solution code and deployment",
                "Select a deployment model and identify instances and environments required for the selected deployment model",
                "Describe the One Version strategy for Dynamics 365 and the effects of One Version on solutions",
                "Segment solution development and delivery into logical phases",
                "Provide alternative methodologies and approaches for deploying modifications",
                "Determine solution maintenance cadence and timelines",
                "Identify upgrade scenarios and select appropriate tools"
              ]
            },{
              topicheding: "Define an application lifecycle management (ALM) strategy",
              topicdes: [
                "Define a code management and data flow strategy",
                "Define a Microsoft Power Platform solution management strategy",
                "Determine which build automation capabilities to implement",
                "Define a roll-back strategy for solution code and data"
              ]
            },{
              topicheding: "Determine a data management strategy",
              topicdes: [
                "Differentiate between transactional and historical data",
                "Define data quality and data validation process",
                "Define data cleansing and transformation strategies",
                "Define data dependencies",
                "Develop a data migration strategy for master, transactional, reference, parameter, and document data entities",
                "Develop data cut-over, verification and data retention plans"
              ]
            },{
              topicheding: "Define the security architecture",
              topicdes: [
                "Differentiate between Azure, Dynamics 365, and infrastructure security",
                "Describe Azure and infrastructure security-related elements",
                "Describe use cases for and capabilities of record-level and role-based security in Dynamics 36"
              ]
            },{
              topicheding: "Define the integration architecture",
              topicdes: [
                "Select an integration pattern including OData, Microsoft Power Platform integration, Batch Data API, customer service, external web services, and office integrations",
                "Identify required integration and interface details",
                "Design integrations",
                "Define an integration testing strategy"
              ]
            },{
              topicheding: "Define the business intelligence and reporting architecture",
              topicdes: [
                "Gather business intelligence and reporting requirements",
                "Define data sources required to meet business intelligence and reporting requirements",
                "Select appropriate business intelligence and reporting tools including Power BI, organizational workspaces, financial reports, SQL Server Reporting Services (SSRS), and the Electronic Reporting tool",
                "Define printing requirements including, Document Routing Agent (DRA), modern report design layout templates, check printing, and label printing"
              ]
            }
          ]
        },
        {
          module: "Module 3: Manage implementations (20–25%)",
          moduledes: [
            {
              topicheding: "Describe Lifecycle Services (LCS) tools",
              topicdes: [
                "Understand the use cases and capabilities of different LCS tools",
                "Understand the use cases and capabilities of Business Process Modeler (BPM)",
                "Understand the use cases and capabilities of LCS Methodologies",
                "Create a usage profile to describe current or projected usage"
              ]
            },{
              topicheding: "Manage interactions with FastTrack",
              topicdes: [
                "Identify the value proposition for FastTrack",
                "Identify FastTrack engagement types and personnel roles",
                "Describe typical types of FastTrack workshops and the inputs for each workshop",
                "Describe go-live checklist elements"
              ]
            },{
              topicheding: "Determine support options",
              topicdes: [
                "Develop a support plan and strategy",
                "Define post-go-live support plans including response times and service-level agreements (SLAs)",
                "Describe use cases and capabilities for the LCS Support tool"
              ]
            },{
              topicheding: "Determine licensing requirements",
              topicdes: [
                "Determine the types of licenses required",
                "Estimate the number of licenses required by using the License Sizing estimator",
                "Describe the process for estimating ongoing software licensing costs"
              ]
            }
          ]
        },
        {
          module: "Module 4: Manage testing (10–15%)",
          moduledes: [
            {
              topicheding: "Define a testing strategy",
              topicdes: [
                "Define a testing strategy that includes all required types of testing",
                "Define a regression testing strategy",
                "Identify opportunities for automated testing",
                "Review use cases and test coverage for business scenarios",
                "Determine when to use RSAT, SysTest, Postman, ATL, Azure DevOps Test Plans, and other tools"
              ]
            },{
              topicheding: "Define a performance testing strategy",
              topicdes: [
                "Define performance goals and requirements",
                "Identify performance monitoring and testing tools",
                "Define performance benchmarks and success criteria",
                "Design a performance and load testing strategy",
                "Troubleshoot performance issues"
              ]
            }
          ]
        }
      ]
    },  
    {
      code: "",
      slug: "",
      syllabustopic: [
        {
          module: "Module 1: ",
          moduledes: [
            {
              topicheding: "",
              topicdes: []
            },
            {
              topicheding: "",
              topicdes: []
            }
          ]
        },
        {
          module: "Module 2: ",
          moduledes: [
            {
              topicheding: "",
              topicdes: []
            }
          ]
        },
        {
          module: "Module 3: ",
          moduledes: [
            {
              topicheding: "",
              topicdes: []
            }
          ]
        },
        {
          module: "Module 4: ",
          moduledes: [
            {
              topicheding: "",
              topicdes: []
            }
          ]
        }
      ]
    }
  ];