# Delegation

:::note Delegation Explainer

Check out the
[How to Delegate](https://www.youtube.com/watch?v=FWj8839Y7JQ&t=2s) video for
steps on Delegating.

:::

If you are too busy to keep up and vote on upcoming referenda, there is an option to delegate your vote to a Representative you trust as your spokesperson. When you delegate, your Representative's account gets your voting power based on the amount of conviction you set.
The conviction for delegation works just like the conviction for regular voting. Except your tokens could be locked longer than they would normally since the locking period resets when you undelegate your vote.

Your Representative does not take any action once the delegation is in place. They can continue to vote on referenda how they see fit. The difference is now, when the Democracy system tallies votes, your delegated tokens are now added to the vote your Representative decision.

To delegate your vote to another account and set the "Conviction." Navigate to the "Governance" tab and choose "Delegation." Your delegation will be assigned to your Representative until you explicitly undelegate your vote.

[Delegation on edgeware.app](https://edgeware.app/#/delegation)

**Note:** that you can delegate to only one account at a time.

1. First input _"delegating account"_ (an account you control, that you want to use to delegate.)
2. In the second input _"your representative"_ (your trusted spokesperson.)
3. Third input put in the _amount_ you want to delegate.
4. Fourth input your _conviction._ (remember, higher convictions **means** that your vote will be locked longer.)

![delegation](/img/delegate.png)

After you send the delegate transaction, the account that you have delegated to will appear under my representatives. You will also see an icon beside the account you used like this in the accounts page. You can also click on the icon to edit your delegation.

![delegation](/img/chain-state.png)

## Undelegate

To undelegate, you first click the undelegate button beside your active representative. Then a window will pop up, and you click undelegate. Then click "Sign and Submit" and sign the transaction. If the transaction goes through, you are no longer delegating, and the democracy lock period you chose when choosing your conviction begins.

![delegation](/img/undelegate.png)

Once your vote has been undelegated, you’re in control of your voting power again. You can start to vote directly, or chose a different account to act as your representative. In this case, your tokens will be locked for the amount of time in accordance with the conviction you set at the beginning of the delegation. For example, if you chose "2x" delegation (four weeks lock up time), your tokens will be locked for 4 weeks after sending the `undelegate` transaction.

You can verify it went through by navigating to the "Chain State" tab and selecting the "democracy" and "votingOf(Accountid): Voting" options. You will see an output similar to below, showing the addresses to which you have delegated your voting power.

![delegation](/img/chain-state.png)
