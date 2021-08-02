import { ChainId } from '@nguyenphu27/sdk'
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Button, LinkExternal } from '../../uikit'
import { ArrowUpCircle } from 'react-feather'
import { AutoColumn } from '../Column'
import { getBscScanLink } from '../../utils'
import { Wrapper, Section, ConfirmedIcon, ContentHeader } from './helpers'
import { SwapButton } from '../Button'

type TransactionSubmittedContentProps = {
  onDismiss: () => void
  hash: string | undefined
  chainId: ChainId
}

const TransactionSubmittedContent = ({ onDismiss, chainId, hash }: TransactionSubmittedContentProps) => {
  const theme = useContext(ThemeContext)

  return (
    <Wrapper>
      <Section>
        <ContentHeader onDismiss={onDismiss}>Transaction submitted</ContentHeader>
        <ConfirmedIcon>
          <ArrowUpCircle strokeWidth={0.5} size={97} color={theme.colors.primary} />
        </ConfirmedIcon>
        <AutoColumn gap="8px" justify="center">
          {chainId && hash && (
            <LinkExternal href={getBscScanLink(chainId, hash, 'transaction')}>View on KccScan</LinkExternal>
          )}
          <SwapButton style={{ height: '48px' }} onClick={onDismiss} mt="20px">
            Close
          </SwapButton>
        </AutoColumn>
      </Section>
    </Wrapper>
  )
}

export default TransactionSubmittedContent
