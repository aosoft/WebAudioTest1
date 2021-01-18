'use strict';

class SineWave extends AudioWorkletProcessor {
    
    constructor() {
        super();
        this.number = 0;
    }

    process(inputs, outputs) {
        const output = outputs[0];

        for (let channel = 0, numberOfChannels = output.length; channel < numberOfChannels; channel++) {
            const outputChannel = output[channel];
            for (let i = 0, len = outputChannel.length; i < len; i++) {
                outputChannel[i] = Math.sin(440 * 2 * 3.14159 * (this.number + i) / 48000.0);
            }
        }

        this.number += output[0].length;

        return true;
    }
}

registerProcessor('sine-wave', SineWave);
