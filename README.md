This app requires python 3 to run.

To initialize environment, go to the base folder and run the following commands

```
py -3 -m venv env

. env/bin/activate

pip install Flask
```

This will create your virutal environtment and initialize your environment

To start server run the following command

```flask --app app.py run```

Now that the server has started you need to build the frontend, to do so run the following command
```
npm install

npm run build
```

Once the frontend has built, you can run the following command to be given a preview link
```
npm run preview
```
