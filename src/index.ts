import Flasher, { Envelope, FlasherInterface, FlasherOptions } from '@flasher/flasher';
import toastr from 'toastr';

import 'toastr/build/toastr.min.css';

export default class ToastrFactory implements FlasherInterface {
  render(envelope: Envelope): void {
    const { notification } = envelope;
    const {
      type, message, title, options,
    } = notification;

    toastr[type as ToastrType](message, title, options as ToastrOptions);
  }

  renderOptions(options: FlasherOptions): void {
    toastr.options = options as ToastrOptions;
  }
}

const flasher = Flasher.getInstance();
flasher.addFactory('toastr', new ToastrFactory());
