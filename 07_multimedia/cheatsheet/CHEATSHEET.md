# Cheatsheet `Multimedia`

## Video

### Video im HTML
```html
<!-- all relevant options enabled -->
<video controls autoplay loop muted playsinline>
    <source src="movie.mp4" type="video/mp4">
</video>
```

### Video im JS
```javascript
const video = document.querySelector('video');
video.play(); // start video
video.pause(); // stopp video
video.load(); // reload video / start new
```

## Audio

### Audio im HTML
```html
<audio controls autoplay>
  <source src="audio.mp3" type="audio/mpeg">
</audio>
```

### Audio im JS
```javascript
const audio = document.querySelector('video');
audio.play(); // start audio
audio.pause(); // stopp audio
audio.load(); // reload audio / start new
```

## Knigge
- Keine Videos mit Ton automatisch abspielen lassen. 
- Keine Audios automatisch abspielen lassen.

### Quellen
- [Video and Audio API](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
