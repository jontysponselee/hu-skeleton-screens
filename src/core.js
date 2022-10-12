import "@shoelace-style/shoelace/dist/themes/light.css";
import "@shoelace-style/shoelace/dist/shoelace.js";
import {RandomPicture} from "random-picture";
import {LoremIpsum} from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});


export function replaceWithWords(selector, count, delay = 1000) {
  const words = document.createElement("p");
  words.innerText = lorem.generateWords(count);

  delayReplacement(selector, words, delay);
}

export function replaceWithSentences(selector, count, delay = 1000) {
  const sentences = document.createElement("p");
  sentences.innerText = lorem.generateSentences(count);

  delayReplacement(selector, sentences, delay);
}

export function replaceWithParagraphs(selector, count, delay = 1000) {
  const paragraphs = document.createElement("p");
  paragraphs.innerText = lorem.generateParagraphs(count);

  delayReplacement(selector, paragraphs, delay);
}

export async function replaceWithImg(selector, delay = 1000) {
  const image = new Image();
  image.src = await randomImg();

  delayReplacement(selector, image, delay);
}

function delayReplacement(selector, replacement, delay) {
  setTimeout(async () => {
    const target = document.querySelector(selector);

    target.parentNode.replaceChild(replacement, target);
  }, delay)
}

async function randomImg() {
  return (await RandomPicture()).url;
}

if (module.hot) {
  module.hot.accept();
}