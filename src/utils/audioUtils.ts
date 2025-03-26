// Utility to get audio input from user
export const getAudio = async (): Promise<MediaStream> => {
  const audio = await navigator.mediaDevices.getUserMedia({
    audio: {
      echoCancellation: false,
      autoGainControl: false,
      noiseSuppression: false,
    },
  });
  return audio;
};

// Connect audio nodes sequentially with error handling
export const setupAudioPipeline = (
  source: MediaStreamAudioSourceNode,
  nodes: AudioNode[],
  destination: AudioDestinationNode
) => {
  nodes.reduce<AudioNode>((prev, curr) => {
    if (prev) prev.connect(curr);
    return curr;
  }, source);

  nodes[nodes.length - 1]?.connect(destination);
};
