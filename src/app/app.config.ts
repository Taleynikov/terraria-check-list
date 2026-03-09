import { provideAnimations } from '@angular/platform-browser/animations';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';

import { provideEventPlugins } from '@taiga-ui/event-plugins';

export const appConfig: ApplicationConfig = {
    providers: [provideAnimations(), provideBrowserGlobalErrorListeners(), provideZonelessChangeDetection(), provideEventPlugins()]
};
