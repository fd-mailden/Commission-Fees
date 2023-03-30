# Commission Fees Application

This application is designed to calculate commission fees for financial transactions based on the provided input data.
The calculation is performed using the rules defined in the task description.

## Getting Started

To get started with this application, please follow the instructions below.

### Prerequisites

Before you can use this application, you need to have Docker and Node.js installed on your machine.

### Installation

1. Clone this repository to your local machine.
2. Navigate to the root directory of the application in your terminal.
3. Create a new `.env` file and provide the necessary values (see below for details).
4. Run docker `docker build -t commission-fees-image .` to build the Docker image.

### Usage

To use this application, please perform the following steps:

1. Navigate to the root directory of the application in your terminal.
2. Run `docker run -it --rm -v $(pwd):/app commission-fees-image node build/app input-data/input.json` to run the
   application and
   calculate commission fees for the provided input data.

### Testing

To test this application, please perform the following steps:

1. Navigate to the root directory of the application in your terminal.
2. Run `docker run -it --rm commission-fees-image npm test` to run the automated tests and verify the functionality of
   the application

## Authors

[Danil Kravchenko](https://github.com/fd-mailden)