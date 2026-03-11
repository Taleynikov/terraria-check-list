import { Component, OnInit } from '@angular/core';
import { ListTData } from './interface';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TuiAvatar, TuiBlock, TuiCheckbox } from '@taiga-ui/kit';
import { DATA } from './data';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    imports: [ReactiveFormsModule, TuiBlock, TuiAvatar, TuiCheckbox, NgClass],
    styleUrl: './app.scss'
})
export class App implements OnInit {
    // ########################################

    protected readonly data = DATA;

    protected formGroup = new FormGroup(
        this.data.reduce((prev, curr) => {
            return {
                ...prev,
                [curr.NAME]: new FormControl(this.getFromMemory(curr.NAME), { nonNullable: true })
            };
        }, {})
    );

    // ########################################

    ngOnInit() {
        this.formGroup.valueChanges.subscribe((data) => {
            this.setToMemory(data);
        });
    }

    // ########################################

    protected getList(): ListTData {
        return this.data.reduce((prev, curr): ListTData => {
            const category = curr.CATEGORY;

            if (!prev[category]) {
                prev[category] = [];
            }

            prev[category].push({
                NAME: curr.NAME,
                IMG: curr.IMG
            });

            return prev;
        }, {});
    }

    protected getCategories(): string[] {
        return Object.keys(this.getList());
    }

    // ########################################

    protected setToMemory(data: Record<string, boolean>): void {
        localStorage.setItem('memory', JSON.stringify(data));
    }

    protected getFromMemory(name: string): boolean {
        const json = localStorage.getItem('memory');

        if (json) {
            const data = JSON.parse(json) as Record<string, boolean>;

            return !!data[name];
        }

        return false;
    }

    // ########################################
}
