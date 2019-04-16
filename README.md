# splitter-component
Splitter component for the elastic.io platform

## Environment variables

Component does not has any required environment variables, but we suggest to use `EIO_REQUIRED_RAM_MB` in order to avoid `Component run out of memory and terminated` error, recommended value of allocated memory is `512` MB.

## Actions

### Split

Splits incoming message using splitting expression. Message has property body that contains object to split.
For example, we have our body that looks like this:
```
{
    "users": [
        {
            "name": "John"
        },
        {
            "name": "Mike"
        }
    ]
}
```
Our splitting expression is "users". As the output of the component we'll have two objects:
```
{
    "name": "John"
}

{
    "name": "Mike"
}
```

If splitting expression refers to object splitter just return this object.

If splitting expression contains primitive value like ```users:"John"```
or array of primitives like ```users:["John", "Mike", "Anna"]``` splitter emits error.
