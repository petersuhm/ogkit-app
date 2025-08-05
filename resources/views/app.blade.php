<!DOCTYPE html>
<html class="antialiased lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        @viteReactRefresh
        @vite('resources/js/app.jsx')
        @vite('resources/css/app.css')
        @inertiaHead
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </head>
    <body>
        @inertia
    </body>
</html>
