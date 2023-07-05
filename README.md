# [DEMO](https://volodalexey.github.io/portfolio)

## Development

### Install node modules (Recommended NodeJS version v16)

```
npm i
```

### Run [Vite](https://vitejs.dev/) dev server

```
npm run dev
```

### Local: Open browser at [http://localhost:9120](http://localhost:9120)

## Create footage

### Record video
Make responsive emulation 500x500 window size.
Record <1min video of gameplay

### Crop video and use video only
```sh
ffmpeg -i input.mkv -vf "crop=500:500:0:0" -map 0:v:0 output.mp4
```
Crop from
```sh
ffmpeg -i input.mkv -ss 00:00:06 -vf "crop=500:500:0:0" -map 0:v:0 output.mp4
```

### Make poster (screenshot)
```sh
ffmpeg -ss 00:00:00 -i output.mp4 -vframes 1 -q:v 2 output.jpg
```