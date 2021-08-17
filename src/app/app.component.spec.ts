import { AppComponent } from './app.component';

let appComponent: AppComponent;

describe('AppComponent', () => {
  beforeEach(() => {
    appComponent = new AppComponent();
  });

  it('should render app title', () => {
    console.log({ title: appComponent.title });
    expect(appComponent.title).toEqual('app works!');
  });
});
