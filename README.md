# React Router Dom v6 Query Parameter Special Character Issue

This repository demonstrates a bug in React Router Dom v6 related to handling special characters in query parameters.  When navigating to a route with a query parameter containing characters like '+' or '/', the navigation might fail or produce unexpected results. The solution involves proper URL encoding and decoding of the query parameters.

## Bug Description

The bug occurs when using the `useNavigate` hook or `<Link>` component to navigate to a route with query parameters that contain special characters.  The router does not correctly interpret these characters, leading to navigation issues.

## Solution

The solution is to encode the query parameters before including them in the URL and decode them on the receiving end.