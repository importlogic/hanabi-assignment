<br/>
<p align="center">
  <a href="https://github.com/importlogic/hanabi-assignment">
    <img src="https://github.com/importlogic/hanabi-assignment/assets/71769231/f2710d90-91ae-4fe1-a417-584eb23972f4" alt="banner">
  </a>

  <h3 align="center">Hanabi Assignment</h3>

  <p align="center">
    This is a simple Questionnaire Application made with React and NestJS for Hanabi Take Home Assignment.
    <br/>
    <br/>
    <a href="https://hanabi-assignment.pages.dev/">View Demo</a>
  </p>
</p>

# About The Project

This project takes a username and redirects the user to the form page where the details of the user are automatically fecthed if he has already filled the form. So the user can add new details or update old ones.

## Frontend

The frontend is made with React and consists of 3 pages.<br>

-   Landing Page
-   Form Page
-   Result Page

Each of which are shown below.

Landing Page

![Screen Shot](https://github.com/importlogic/hanabi-assignment/assets/71769231/ff3cf6d9-a881-4746-be07-b00a19a600bb)

Form Page

![Screen Shot](https://github.com/importlogic/hanabi-assignment/assets/71769231/be165a09-bd8f-4f77-920a-5c1c6c281750)

Result Page

![Screen Shot](https://github.com/importlogic/hanabi-assignment/assets/71769231/89b02c81-5e0f-4948-9657-c0c943bf9bea)

## Backend

The backend is made with NestJS and supports two routes : `/get-user` `/set-user`

<table>
    <tr>
        <th>
            Route
        </th>
        <th>
            Type
        </th>
        <th>
            Body
        </th>
        <th>
            Returns
        </th>
    </tr>
    <tr>
        <td>
            /get-user
        </td>
        <td>
            POST
        </td>
        <td>
            username: string
        </td>
        <td>
            Status success or failed and user details if the operation was successfull
        </td>
    </tr>
    <tr>
        <td>
            /set-user
        </td>
        <td>
            POST
        </td>
        <td>
            username: string <br>
            name: string <br>
            email: string <br>
            number: Int64 <br>
            dob: string <br>
        </td>
        <td>
            Status success or failed.
        </td>
    </tr>
    
</table>

## Getting Started

You can find the respective guides for installation and setup in the frontend and backend directories.

## Authors

-   [Manas Rawat](https://github.com/importlogic)