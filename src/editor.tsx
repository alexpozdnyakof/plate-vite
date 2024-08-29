import { Plate } from '@udecode/plate-common';
import { Editor } from './components/plate-ui/editor';

const initialValue = [
  {
    type: 'p',
    children: [
      {
        text: 'This is editable plain text with react and history plugins, just like a <textarea>!',
      },
    ],
  },
];

export default function InnerEditor() {
  return (
    <Plate initialValue={initialValue}>
      <Editor placeholder="Type..." />
    </Plate>
  );
}
