import remote from './remote';

export const Button = remote(() => {
  return import("remote:glide_components/Base")
    .then((module) => ({ default: module.Button }))
})