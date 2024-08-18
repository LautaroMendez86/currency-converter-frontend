import { Component, inject, OnInit } from '@angular/core';
import { Subscription } from 'src/app/interfaces/subscription';
import { User } from 'src/app/interfaces/user';
import { History } from 'src/app/interfaces/history';
import { HistoryService } from 'src/app/services/history.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userService = inject(UserService);
  historyService = inject(HistoryService);
  subscriptionService = inject(SubscriptionService);

  user:User = {
    id: 0,
    email: '',
    username: '',
    subscriptionId: 0,
    subscription: {
      id: 0,
      name: '',
      price: 0,
      totalAvailableConversions: 0,
      users: [],
    },
    favourites: {},
  };
  history: History[] = [];
  subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.getUser();
    this.getSubscription();
    this.getHistory();
  }

  async getUser() {
    this.user = await this.userService.getUser();
  }

  async getSubscription() {
    this.subscriptions = await this.subscriptionService.index();
  }

  async getHistory() {
    this.history = await this.historyService.getHistory();
  }

  async updateSubscription(subscriptionId: number) {
    try {
      this.user.subscriptionId = subscriptionId;
      await this.userService.update(this.user);
      this.getUser();
    } catch (error) {
      console.error("Error al actualizar la suscripción:", error);
    }
  }

}
